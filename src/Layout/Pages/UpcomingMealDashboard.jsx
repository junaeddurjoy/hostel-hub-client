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
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import Swal from 'sweetalert2'
const UpcomingMealDashboard = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://hostel-hub-server.vercel.app/meal')
            .then(res => res.json())
            .then(data => setMeals(data));
    }, [])
    console.log(meals)
    // var { admin, image, item, type, ingredients, email, price, rating, like, reviews, post_date, launch, description } = meals;
    const handlePublish = id => {
        for (let i = 0; i < meals.length; i++) {
            if (meals[i]._id == id) {
                var { admin, image, item, type, ingredients, email, price, rating, like, reviews, post_date, launch, description } = meals[i];
                console.log(item);
            }
        }
        launch = 'add';
        like=10;
        const updatedApply = { admin, email, item, type, image, ingredients, price, description, post_date, rating, like, reviews, launch };
        fetch(`https://hostel-hub-server.vercel.app/meal/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedApply)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Meal Launched Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    console.log('added');
                    location.reload();
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
                                            {
                                                meal.launch == "upcoming" &&
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
                                                    <td>{

                                                        meal.reviews.map(userComment =>

                                                            <p key={meal.reviews.reviewer} className=" px-5 font-semibold list-disc flex items-center text-purple-600"><MdRateReview className="text-2xl" />{userComment.reviewComment} <br /></p>

                                                        )
                                                    }
                                                    </td>
                                                    <td>
                                                        <div className="font-bold text-xl">{meal.admin}</div>
                                                    </td>
                                                    <td>
                                                        <div className="font-bold text-xl">{meal.email}</div>
                                                    </td>
                                                    <td>
                                                        <div className="join join-vertical lg:join-horizontal">

                                                            <button onClick={() => handlePublish(meal._id)} className="btn join-item text-xl font-semibold bg-black text-white">Launch</button>

                                                        </div>
                                                    </td>
                                                </>
                                            }
                                        </tr>
                                    )}
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
        </div>
    );
};

export default UpcomingMealDashboard;