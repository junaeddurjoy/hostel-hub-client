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
import { GoDotFill } from "react-icons/go";

const MealDetails = () => {
    const { user } = useContext(Authcontext);
    const meal = useLoaderData();
    var { _id, image, item, type, ingredients, price, rating, like, reviews, post_date, admin, launch, description } = meal;


    let userReview = reviews;

    const food_id = _id;
    console.log(admin)
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

    // update like
    const handleUpdateLike = event => {
        event.preventDefault();
        const form = event.target;
        like = parseInt(form.likes.value) + 1;
        let launched = "";
        if (like > 9) {
            launched = "add";
        }
        else {
            launched = "upcoming";
        }
        launch = launched;
        const updatedApply = { admin, email, item, type, image, ingredients, price, description, post_date, rating, like, reviews, launch };

        fetch(`https://hostel-hub-server.vercel.app/meal/${_id}`, {
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
                    location.reload();
                }
            })
    }

    // update review
    const handleUpdateReview = event => {
        event.preventDefault();
        const form = event.target;

        let comment = form.review.value;
        let comments = {
            reviewer: user?.email,
            reviewComment: comment
        };
        reviews.push(comments)
        console.log(reviews)
        const updatedApply = { admin, email, item, type, image, ingredients, price, description, post_date, rating, like, reviews, launch };

        fetch(`https://hostel-hub-server.vercel.app/meal/${_id}`, {
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
                    location.reload();
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
                            </div>
                            <p className="text-2xl font-semibold px-5 flex items-center gap-2 text-purple-600 pt-6 pb-3"><MdRateReview className="text-2xl" />Reviews</p>
                            <ul>
                            {
                                userReview.map(userComment =>
                                <li key={userReview.reviewer} className=" px-5 font-semibold list-disc flex items-center text-purple-600"><GoDotFill />{userComment.reviewComment}</li>
                                )
                            }
                            </ul>
                            <p className="py-6 px-5 font-semibold list-disc flex items-center ">Post Time: {post_date}</p>
                            <p className="pb-6 px-5 font-semibold list-disc flex items-center ">Description: {description}</p>
                            <div className="flex items-center gap-3">
                                {
                                    launch != "upcoming" &&
                                    <div>
                                        <button onClick={handleMealRequest} className="btn btn-accent ml-5">Request Meal</button>
                                    </div>
                                }
                                <form onSubmit={handleUpdateReview}>
                                    <input type="text" name="review" placeholder="review" className="input input-bordered border-purple-600" />
                                    <button type="submit" className="btn btn-outline btn-primary ">Comment</button>
                                </form>
                                <form onSubmit={handleUpdateLike}>
                                    <input type="number" name="likes" defaultValue={like} placeholder="like" className="input input-bordered hidden" />
                                    <button type="submit" className="btn btn-outline btn-error">Like</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;