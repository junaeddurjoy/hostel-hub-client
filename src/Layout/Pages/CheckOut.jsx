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
import Swal from 'sweetalert2'
const CheckOut = () => {
    const { user } = useContext(Authcontext);

    const [dbMeal, setdbMeal] = useState([]);
    useEffect(() => {
        fetch('https://hostel-hub-server.vercel.app/request')
            .then(res => res.json())
            .then(data => setdbMeal(data));
    }, []);
    let totalPrice = 0;
    const matched = dbMeal.map(dbFood => {
        const { email } = dbFood;
        if (email == user?.email) {
            totalPrice = totalPrice + dbFood.price;
        }
    })

    console.log(totalPrice)
    const [meals, setMeals] = useState([]);
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hostel-hub-server.vercel.app/request/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = meals.filter(food => food._id !== id);
                            setMeals(remaining);
                            location.reload();
                        }
                    })
            }
        })
    }
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
                                <th className="text-xl font-bold">Price</th>
                                <th className="text-xl font-bold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dbMeal.map(meal =>
                                    <tr key={meal._id}>
                                        {
                                            meal.email == user?.email &&
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
                                                <td className="text-lg">
                                                    <p className="py-6 px-5 font-semibold list-disc flex items-center text-purple-600"><MdRateReview className="text-2xl" />{meal.reviews}</p>
                                                </td>
                                                <td className="text-lg">
                                                    <p className="py-6 px-5 font-semibold list-disc -ml-5">Pending</p>
                                                </td>
                                                <td className="text-lg">
                                                    <p className="py-6 px-5 font-semibold list-disc -ml-5">{meal.price}</p>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDelete(meal._id)} className="btn btn-ghost btn-md"><MdCancel className="text-3xl text-red-600" /></button>
                                                </td>

                                            </>

                                        }

                                    </tr>)
                            }
                            <tr>
                                <th className="text-xl font-bold"></th>
                                <th className="text-xl font-bold "></th>
                                <th className="text-xl font-bold"></th>
                                <th className="text-xl font-bold"></th>
                                <th className="text-xl font-bold">Total Price: {totalPrice}</th>
                                <th className="text-xl font-bold">
                                    <Link to={'/payment'}>
                                        <button disabled={!dbMeal.length} className="btn btn-outline btn-warning">Pay</button>
                                    </Link>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;