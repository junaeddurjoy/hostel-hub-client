import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRateReview } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineUpcoming } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
const ServeMeal = () => {
    const [dbMeal, setdbMeal] = useState([]);
    useEffect(() => {
        fetch('https://hostel-hub-server.vercel.app/request')
            .then(res => res.json())
            .then(data => setdbMeal(data));
    }, []);
    const [meals, setMeals] = useState([]);
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to serve this meal!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Serve it!'
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
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-xl font-bold">Meal Title</th>
                                    <th className="text-xl font-bold ">Email</th>

                                    <th className="text-xl font-bold">Status</th>
                                    <th className="text-xl font-bold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dbMeal.map(meal =>
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
                                            <td>
                                                <div className="font-bold text-xl">{meal.email}</div>
                                            </td>
                                            <td>
                                                <div className="font-bold text-xl flex items-center"><IoMdStopwatch className="text-2xl font-bold text-violet-600" />Pending</div>
                                            </td>
                                            <td>
                                                <div className="join join-vertical lg:join-horizontal">
                                                    <button onClick={() => handleDelete(meal._id)} className="btn join-item text-xl font-semibold bg-black text-white">Serve</button>
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

export default ServeMeal;