import { Link, useLoaderData } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRateReview } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineUpcoming } from "react-icons/md";

import Swal from 'sweetalert2'
const UpdateMeal = () => {

    const dbMeals = useLoaderData();
    const { _id, admin, email, item, type, image, ingredients, price, description, post_date, rating, like, reviews,launch } = dbMeals;



    const handleUpdateMeal = event => {
        event.preventDefault();
        const form = event.target;
        const item = form.item.value;
        const type = form.type.value;
        const image = form.image.value;
        const ingredients = form.ingredients.value;
        const price = form.price.value;
        const description = form.description.value;
        const post_date = form.post_date.value;
        const rating = form.rating.value;
        const like = form.like.value;
        const reviews = form.reviews.value;
        const admin = form.name.value;
        const email = form.email.value;
        const launch = form.launch.value;
        const updatedApply = { admin, email, item, type, image, ingredients, price, description, post_date, rating, like, reviews, launch };
    
        fetch(`http://localhost:5000/meal/${_id}`, {
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
                        text: 'Meal Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    console.log('updated');
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
                    <h3 className="text-3xl text-center font-bold py-4">Update Meal</h3>
                    <div className="bg-green-50 border-2 border-green-400">
                        <form onSubmit={handleUpdateMeal}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5">
                                {/* 1 */}
                                <div className="form-control  items-center">
                                    <label className="label ">
                                        <span className="label-text font-bold text-xl">Meal Title</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Name</span>
                                        <input type="text" name="item" defaultValue={item} placeholder="meal name" className="input input-bordered" />
                                    </label>
                                </div>
                                {/* 2 */}
                                <div className="form-control  items-center">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">Meal Type</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Type</span>
                                        <select name="type" defaultValue={type} className="input input-bordered">
                                            <option name="lunch" id="">lunch</option>
                                            <option name="dinner" id="">dinner</option>
                                            <option name="breakfast" id="">breakfast</option>
                                        </select>
                                    </label>
                                </div>
                                {/* 3 */}
                                <div className="form-control  items-center">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">Meal Image</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Image URL</span>
                                        <input type="text" name="image" defaultValue={image} placeholder="image url" className="input input-bordered" />
                                    </label>
                                </div>
                                {/* 4 */}
                                <div className="form-control  items-center">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">Ingredients</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Ingredients</span>
                                        <input type="text" name="ingredients" defaultValue={ingredients} placeholder="ingredients" className="input input-bordered" />
                                    </label>
                                </div>
                                {/* 5 */}
                                <div className="form-control  items-center">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">Description</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Description</span>
                                        <input type="text" name="description" defaultValue={description} placeholder="description" className="input input-bordered" />
                                    </label>
                                </div>
                                {/* 6 */}
                                <div className="form-control  items-center">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">Price</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Price </span>
                                        <input type="number" name="price" defaultValue={price} placeholder="price in taka" className="input input-bordered" />
                                    </label>
                                </div>
                                {/* 7 */}
                                <div className="form-control  items-center">
                                    <label className="label ">
                                        <span className="label-text font-bold text-xl">Posting Date</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Date</span>
                                        <input type="date" name="post_date" defaultValue={post_date} placeholder="date" className="input input-bordered" />
                                    </label>
                                </div>
                                {/* 8 */}
                                <div className="form-control  items-center">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">Rating</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Rating</span>
                                        <input type="number" name="rating" defaultValue={rating} placeholder="rating" className="input input-bordered" />
                                    </label>
                                </div>
                                {/* 9 */}
                                <div className="form-control  items-center">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">Likes</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Likes</span>
                                        <input type="number" name="like" defaultValue={like} placeholder="like" className="input input-bordered" />
                                    </label>
                                </div>
                                {/* 9 */}
                                <div className="form-control  items-center">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">Reviews</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Reviews</span>
                                        <input type="number" name="reviews" defaultValue={reviews} placeholder="review" className="input input-bordered" />
                                    </label>
                                </div>
                                {/* 10 */}
                                <div className="form-control  items-center">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">Admin Name</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Admin Name</span>
                                        <input type="text" name="name" placeholder="admin name" defaultValue={admin} className="input input-bordered" />
                                    </label>
                                </div>
                                {/* 10 */}
                                <div className="form-control  items-center">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">Admin Email</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Admin Email</span>
                                        <input type="email" name="email" placeholder="admin email" defaultValue={email} className="input input-bordered" />
                                    </label>
                                </div>
                                {/* 11 */}
                                <div className="form-control  items-center">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">Add/Upcoming</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span className="mr-3">Add/Upcoming</span>
                                        <select name="launch" defaultValue={launch} className="input input-bordered">
                                            <option name="add" id="">Add</option>
                                            <option name="upcoming" id="">Upcoming</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className="p-5 text-center">
                                <button type="submit" className="btn btn-wide justify-center bg-green-400 hover:bg-green-300 font-bold">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateMeal;