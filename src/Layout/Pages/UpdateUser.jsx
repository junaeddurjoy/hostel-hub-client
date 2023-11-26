import { Link, useLoaderData } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRateReview } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineUpcoming } from "react-icons/md";
import Swal from 'sweetalert2'
const UpdateUser = () => {
    const dbUser = useLoaderData();
    const { _id ,role, name, email, membership } = dbUser;


    const handleUpdateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const role = form.role.value;
        const membership = form.membership.value;
        const updatedApply = { role, name, email, membership };
        fetch(`https://hostel-hub-server.vercel.app/user/${_id}`, {
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
                        text: 'User Updated Successfully',
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
                    <h3 className="text-3xl text-center font-bold py-4">Update User</h3>
                    <div className="bg-green-50 border-2 border-green-400">
                        <form onSubmit={handleUpdateUser}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-5">
                                {/* 1 */}
                                <div className="form-control  items-center">
                                    <label className="label ">
                                        <span className="label-text font-bold text-xl">Name</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span>name</span>
                                        <input type="text" defaultValue={name} name="name" placeholder="recruiter name" className="input input-bordered" />
                                    </label>
                                </div>
                                {/* 2 */}
                                <div className="form-control  items-center">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl">Email</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span>Email</span>
                                        <input type="email" defaultValue={email} name="email" placeholder="email" className="input input-bordered" />
                                    </label>
                                </div>

                                {/* 4 */}
                                <div className="form-control items-center">
                                    <label className="label ">
                                        <span className="label-text font-bold text-xl">Role</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span>Role</span>
                                        <select defaultValue={role} name="role" className="input input-bordered">
                                            <option name="user" id="">user</option>
                                            <option name="member" id="">member</option>
                                            <option name="super" id="">super</option>
                                            <option name="premium" id="">premium</option>
                                            <option name="admin" id="">admin</option>
                                        </select>
                                    </label>
                                </div>
                                {/* 5 */}
                                <div className="form-control items-center">
                                    <label className="label ">
                                        <span className="label-text font-bold text-xl">Membership</span>
                                    </label>
                                    <label className="input-group justify-center">
                                        <span>Memberhsip</span>
                                        <select defaultValue={membership} name="membership" className="input input-bordered">
                                            <option name="bronze" id="">Bronze</option>
                                            <option name="silver" id="">Silver</option>
                                            <option name="gold" id="">Gold</option>
                                            <option name="platinum" id="">Platinum</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className="p-5 text-center">
                                <button type="submit" className="btn btn-wide justify-center bg-green-400 hover:bg-green-300 font-bold">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;