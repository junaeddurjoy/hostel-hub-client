import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRateReview } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineUpcoming } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { useEffect, useState } from "react";
const AllReviews = () => {


    const [dbMeal, setdbMeal] = useState([]);
    useEffect(() => {
        fetch('https://hostel-hub-server.vercel.app/meal')
            .then(res => res.json())
            .then(data => setdbMeal(data));
    }, []);

    return (
        <div className="w-full flex">
            <div className="w-1/6 bg-gray-200">
                <ul className="menu menu-lg bg-gray-200 w-56 rounded-box">
                    <Link to={'/admindashboard'}><li className="font-semibold"><a><CgProfile className="text-3xl text-green-600" />My Profile</a></li></Link>
                    <Link to={'/manageusers'}><li className="font-semibold"><a><MdManageAccounts className="text-3xl text-green-600" /> Manage Users</a></li></Link>
                    <Link to={'/addmeal'}><li className="font-semibold"><a><MdAddToPhotos className="text-3xl text-green-600" /> Add Meal</a></li></Link>
                    <Link to={'/allmeal'}><li className="font-semibold"><a><IoIosWallet className="text-3xl text-green-600" /> All Meal</a></li></Link>
                    <Link to={'/allreviews'}><li className="font-semibold"><a><MdOutlineRateReview className="text-3xl text-green-600" /> All Reviews</a></li></Link>
                    <Link to={'/servemeal'}><li className="font-semibold"><a><IoFastFoodOutline className="text-3xl text-green-600" /> Serve Meal</a></li></Link>
                    <Link to={'/upcomingmealdashboard'}><li className="font-semibold"><a><MdOutlineUpcoming className="text-3xl text-green-600" /> Upcoming Meal</a></li></Link>
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
                <div className="join w-1/5 ml-96 mt-20">
                        <button className="join-item btn">1</button>
                        <button className="join-item btn ">2</button>
                        <button className="join-item btn">3</button>
                        <button className="join-item btn">4</button>
                    </div>
            </div>
        </div>
    );
};

export default AllReviews;