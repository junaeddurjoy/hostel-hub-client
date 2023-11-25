/* eslint-disable no-unused-vars */
import { CgProfile } from "react-icons/cg";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import { Link } from "react-router-dom";
import { Authcontext } from "../../providers/Authprovider";
import { useContext, useEffect, useState } from "react";
import { BiSolidBadge } from "react-icons/bi";


const UserDashboard = () => {
    const { user } = useContext(Authcontext);
    const [dbUsers, setdbUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setdbUsers(data));
    }, [])
    let dbRole = '';
    const matched = dbUsers.map(dbUser => {
        const { role } = dbUser;
        dbRole = { role };
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
                <div className="hero justify-start">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={user?.photoURL} className="h-60 w-60 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                            <div>
                                {
                                    dbRole.role=="user" &&
                                    <p className="py-6 text-2xl font-semibold flex items-center gap-1"><BiSolidBadge className="text-yellow-700" />Bronze {dbRole.role}</p>
                                }
                                {
                                    dbRole.role=="member" &&
                                    <p className="py-6 text-2xl font-semibold flex items-center gap-1"><BiSolidBadge className="text-gray-300" />Silver {dbRole.role}</p>
                                }
                                {
                                    dbRole.role=="super" &&
                                    <p className="py-6 text-2xl font-semibold flex items-center gap-1"><BiSolidBadge className="text-yellow-500" />Gold {dbRole.role}</p>
                                }
                                {
                                    dbRole.role=="premium" &&
                                    <p className="py-6 text-2xl font-semibold flex items-center gap-1"><BiSolidBadge className="text-gray-500" />Platinum {dbRole.role}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;