/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../providers/Authprovider";
const RequestedMeals = () => {
    const { user } = useContext(Authcontext);


    const [dbUsers, setdbUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setdbUsers(data));
    }, []);
    const [dbMeal, setdbMeal] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/meal')
            .then(res => res.json())
            .then(data => setdbMeal(data));
    }, []);

    const foodList = [];
    const matched = dbUsers.map(dbUser => {
        const { email } = dbUser;
        if (email == user?.email) {
            console.log(dbUser.food);
            for (let i = 0; i < dbUser.food.length; i++) {
                let foodId = dbUser.food[i];
                const matchedFood = dbMeal.map(dbFood => {
                    if (dbFood._id == foodId) {
                        foodList.push(dbFood);
                    }
                })
            }
        }
    })
    console.log('foooooooooooooooooooooooooooo',foodList);
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
                                <th className="text-xl font-bold">Status</th>
                                <th className="text-xl font-bold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                foodList.map(meal =>
                                    <tr key={meal._id}>
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
                                        <td className="text-lg">
                                            <p className="py-6 px-5 font-semibold list-disc flex items-center text-purple-600"><MdRateReview className="text-2xl" />{meal.reviews}</p>
                                        </td>
                                        <td className="text-lg">
                                            <p className="py-6 px-5 font-semibold list-disc -ml-5">Pending</p>
                                        </td>
                                        <td>
                                            <button className="btn btn-ghost btn-md"><MdCancel className="text-3xl text-red-600" /></button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RequestedMeals;