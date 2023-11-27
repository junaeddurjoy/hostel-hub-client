/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { BiSolidBowlRice } from "react-icons/bi";
import { GiCoolSpices } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../providers/Authprovider";
import Swal from 'sweetalert2'
import { TbCurrencyTaka } from "react-icons/tb";

const MealDetails = () => {
    const { user } = useContext(Authcontext);
    const meal = useLoaderData();
    const { _id, image, item, type, ingredients, price, rating, like, reviews, post_date, admin, launch, description } = meal;
    const food_id = _id;

    const [dbUsers, setdbUsers] = useState([]);
    useEffect(() => {
        fetch('https://hostel-hub-server.vercel.app/user')
            .then(res => res.json())
            .then(data => setdbUsers(data));
    }, []);

    let email = user?.email;
    const updatedReqApply = { image, item, type, ingredients, price, rating, like, reviews, email };
    const handleMealRequest = event => {
        event.preventDefault();
        const matched = dbUsers.map(dbUser => {
            const { email } = dbUser;
            if (email == user?.email) {
                fetch('https://hostel-hub-server.vercel.app/request', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedReqApply)
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Meal Requested',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    })
            }
        })
    }
    return (
        <div className="">
            <div className="lg:px-32 py-10">

                <div className="hero justify-start">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={image} className=" max-w-sm rounded-lg shadow-4xl" />
                        <div>
                            <h1 className="text-5xl ml-5 font-bold">{item}</h1>
                            <h1 className="text-xl ml-5 mt-4  font-bold">Distributor: {admin}</h1>
                            <div className="flex">
                                <p className="py-6 px-5 font-semibold list-disc flex items-center text-green-700"><BiSolidBowlRice className="text-2xl" />{type}</p>
                                <p className="py-6 px-5 font-semibold list-disc flex items-center"><GiCoolSpices className="text-2xl" />{ingredients}</p>
                                <p className="py-6 px-5 font-semibold list-disc flex items-center text-yellow-600 "><FaStar className="text-2xl" />{rating}</p>
                            </div>
                            <div className="flex">
                                <p className=" px-5 font-semibold list-disc flex items-center text-blue-600 text-4xl"><TbCurrencyTaka className="text-4xl" />{price}</p>
                                <p className=" px-5 font-semibold list-disc flex items-center text-red-500"><FaHeart className="text-2xl" />{like}</p>
                                <p className=" px-5 font-semibold list-disc flex items-center text-purple-600"><MdRateReview className="text-2xl" />{reviews}</p>
                            </div>
                            <p className="py-6 px-5 font-semibold list-disc flex items-center ">Post Time: {post_date}</p>
                            <p className="py-6 px-5 font-semibold list-disc flex items-center ">Description: {description}</p>
                            <div className="flex items-center gap-3">
                                {
                                    launch != "upcoming" &&
                                    <div>
                                        <button onClick={handleMealRequest} className="btn btn-accent ml-5">Request Meal</button>
                                    </div>
                                }
                                <textarea className="ml-5 h-10 textarea textarea-primary" placeholder="type here"></textarea>
                                <button className="btn btn-outline btn-primary">Comment</button>
                                <button className="btn btn-outline btn-error">Like</button>

                            </div>
                        </div>
         
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;