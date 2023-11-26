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
import Swal from 'sweetalert2'
const AllMeal = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/meal')
            .then(res => res.json())
            .then(data => setMeals(data));
    }, [])



    const [foods, setFoods] = useState([]);
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
                fetch(`http://localhost:5000/meal/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = foods.filter(food => food._id !== id);
                            setFoods(remaining);
                            location.reload();
                        }
                    })
            }
        })
    }
    return (
        <div>
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
                        {/* <div className=" mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    {
                        meals.map(meal => <MealCard
                            key={meal.meal_id}
                            meal = {meal}
                        ></MealCard>)
                    }
                </div> */}
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-xl font-bold">Meal Title</th>
                                    <th className="text-xl font-bold ">Likes</th>
                                    <th className="text-xl font-bold">Reviews</th>
                                    <th className="text-xl font-bold">Distributor</th>
                                    <th className="text-xl font-bold">Distributor Email</th>
                                    <th className="text-xl font-bold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    meals.map(meal =>
                                        <tr
                                            key={meal.meal_id}
                                        >
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
                                            <td>
                                                <div className="font-bold text-xl">{meal.admin}</div>
                                            </td>
                                            <td>
                                                <div className="font-bold text-xl">{meal.email}</div>
                                            </td>
                                            <td>
                                                <div className="join join-vertical lg:join-horizontal">
                                                    <Link to={`/updatemeal/${meal._id}`}>
                                                        <button className="btn join-item text-xl font-semibold bg-purple-500">Update</button>
                                                    </Link>
                                                    <button onClick={() => handleDelete(meal._id)} className="btn join-item text-xl font-semibold bg-red-500">Delete</button>
                                                    <Link to={`/mealdetails/${meal._id}`}>
                                                        <button className="btn join-item text-xl font-semibold bg-green-500">View</button>
                                                    </Link>

                                                </div>
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllMeal;