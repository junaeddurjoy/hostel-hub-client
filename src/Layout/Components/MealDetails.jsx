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

const MealDetails = () => {
    const { user } = useContext(Authcontext);
    const meal = useLoaderData();
    const { _id, image, item, type, ingredients, rating, like, reviews, post_time } = meal;
    const food_id = _id;

    const [dbUsers, setdbUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setdbUsers(data));
    }, []);
    let membership = 'silver';
    const updatedApply = { food_id};
    const handleMealRequest = event => {
        event.preventDefault();
        const matched = dbUsers.map(dbUser => {
            const { email } = dbUser;
            if (email == user?.email) {
                fetch(`http://localhost:5000/user/${dbUser._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedApply)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Meal Requested',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                            console.log('updated');
                        }
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
                            <h1 className="text-5xl font-bold">{item}</h1>
                            <div className="flex">
                                <p className="py-6 px-5 font-semibold list-disc flex items-center text-green-700"><BiSolidBowlRice className="text-2xl" />{type}</p>
                                <p className="py-6 px-5 font-semibold list-disc flex items-center"><GiCoolSpices className="text-2xl" />{ingredients}</p>
                                <p className="py-6 px-5 font-semibold list-disc flex items-center text-yellow-600 "><FaStar className="text-2xl" />{rating}</p>
                            </div>
                            <p className="py-6 px-5 font-semibold list-disc flex items-center text-red-500"><FaHeart className="text-2xl" />{like}</p>
                            <p className="py-6 px-5 font-semibold list-disc flex items-center text-purple-600"><MdRateReview className="text-2xl" />{reviews}</p>
                            {
                                post_time != "upcoming" &&
                                <div>
                                    <button onClick={handleMealRequest} className="btn btn-accent">Request Meal</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;