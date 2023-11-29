/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../providers/Authprovider";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const MyReviews = () => {
    const { user } = useContext(Authcontext);

    const [dbMeal, setdbMeal] = useState([]);
    useEffect(() => {
        fetch('https://hostel-hub-server.vercel.app/meal')
            .then(res => res.json())
            .then(data => setdbMeal(data));
    }, []);
    let dbRev = '';
    const matched = dbMeal.map(meal => {
        const match = meal.reviews.map(revEmail => {
            if (revEmail.reviewer == user?.email) {
                dbRev = revEmail.reviewer;
                console.log(dbRev)
            }
        })
    })

    return (
        <div className="w-full flex">
            <div className="w-1/6 bg-gray-200">
                <ul className="menu menu-lg bg-gray-200 w-56 rounded-box">
                    <Link to={'/userdashboard'}><li className="font-semibold"><a><CgProfile className="text-3xl text-green-600" />My Profile</a></li></Link>
                    <Link to={'/requestedmeals'}><li className="font-semibold"><a><IoPersonAddOutline className="text-3xl text-green-600" /> Requested Meals</a></li></Link>
                    <Link to={'/myreviews'}><li className="font-semibold"><a><MdOutlineRateReview className="text-3xl text-green-600" /> My Reviews</a></li></Link>
                </ul>
            </div>
            <div className="w-5/6">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-xl font-bold">Meal Title</th>
                                <th className="text-xl font-bold ">Likes</th>
                                <th className="text-xl font-bold">Review</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dbMeal.map(meal =>
                                    <tr key={meal._id}>
                                        {
                                            meal.reviews.length != 0 &&
                                            <>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-20 h-20">
                                                                <img src={meal.image} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-xl">{meal.item}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-lg">
                                                    <p className="py-6 px-5 font-semibold list-disc flex items-center text-red-500"><FaHeart className="text-2xl" />{meal.like}</p>
                                                </td>
                                                {/* <td className="text-lg">
                                                    <p className="py-6 px-5 font-semibold list-disc flex items-center text-purple-600"><MdRateReview className="text-2xl" />{meal.reviews}</p>
                                                </td> */}
                                                <td>
                                                    {
                                                        meal.reviews.map(userComment =>
                                                            <p key={meal.reviews.reviewer} className=" px-5 font-semibold list-disc flex items-center text-purple-600"><MdRateReview className="text-2xl" />{userComment.reviewComment}</p>
                                                        )
                                                    }
                                                </td>
                                                {/* <td>
                                                    <div className="join join-vertical lg:join-horizontal">
                                                        <button className="btn join-item text-xl font-semibold bg-purple-500">Edit</button>
                                                        <button className="btn join-item text-xl font-semibold bg-red-500">Delete</button>
                                                        <button className="btn join-item text-xl font-semibold bg-green-500">View</button>
                                                    </div>
                                                </td> */}
                                            </>
                                        }
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className="join w-1/5 ml-[420px] mt-20">
                        <button className="btn btn-square"><FaAnglesLeft /></button>
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                        <button className="btn btn-square"><FaAnglesRight /></button>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;