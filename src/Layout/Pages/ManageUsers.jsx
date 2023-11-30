/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRateReview } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineUpcoming } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../providers/Authprovider";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import Swal from 'sweetalert2'
const ManageUsers = () => {
    const { user } = useContext(Authcontext);
    const [dbUser, setdbUser] = useState([]);
    useEffect(() => {
        fetch('https://hostel-hub-server.vercel.app/user')
            .then(res => res.json())
            .then(data => setdbUser(data));
    }, []);

    const handleUpdateUser = id => {
        let role='';
        let name='';
        let email='';
        let membership= '';
        const matched = dbUser.map(dbUsers => {
            role=dbUsers.role;
            name=dbUsers.name;
            email=dbUsers.email;
            membership=dbUsers.membership;
            const { _id } = dbUsers;
            if(_id==id){
                role="admin";
            }
        })
        const updatedApply = { role, name, email, membership };
        fetch(`https://hostel-hub-server.vercel.app/user/${id}`, {
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
                    location.reload();
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
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-xl font-bold">User Name</th>
                                    <th className="text-xl font-bold ">User Email</th>
                                    <th className="text-xl font-bold">Subscription Status</th>
                                    <th className="text-xl font-bold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dbUser.map(userDB =>
                                    <tr key={userDB._id}>
                                        {
                                            user?.email != userDB.email &&
                                            <>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="font-bold text-xl">{userDB.name}</div>
                                                    </div>
                                                </td>
                                                <td className="text-lg">
                                                    <p className="py-6 px-5 font-semibold">{userDB.email}</p>
                                                </td>
                                                <td className="text-lg">
                                                    <p className="py-6 px-5 font-semibold list-disc flex items-center">{userDB.role}</p>
                                                </td>
                                                <td>
                                                    <div className="join join-vertical lg:join-horizontal">
                                                        <Link to={`/updateuser/${userDB._id}`}>
                                                            <button className="btn join-item text-xl font-semibold bg-black text-white">Update User</button>
                                                        </Link>
                                                        <button onClick={() => handleUpdateUser(userDB._id)} className="btn join-item text-xl font-semibold bg-black text-white">Make Admin</button>
                                                    </div>
                                                </td>
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
        </div >
    );
};

export default ManageUsers;