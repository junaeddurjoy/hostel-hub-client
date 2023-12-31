/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../providers/Authprovider";
import { TbLogin, TbLogin2 } from "react-icons/tb";

const Navbar = () => {
    const { user, logout } = useContext(Authcontext);

    const handleSignOut = event => {
        logout()
            .then()
            .catch()
    }

    const [dbUsers, setdbUsers] = useState([]);
    useEffect(() => {
        fetch('https://hostel-hub-server.vercel.app/user')
            .then(res => res.json())
            .then(data => setdbUsers(data));
    }, [])
    let dbRole = '';
    const matched = dbUsers.map(dbUser => {
        const { email } = dbUser;
        if (email == user?.email) {
            const { role } = dbUser;
            dbRole = {role};
        }
    })
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to={"/"}><li>Home</li></Link>
                            <Link to={'/meals'}><li>Meals</li></Link>
                            <Link to={'/upcomingMeals'}><li>Upcoming Meals</li></Link>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="h-16 w-16" src="https://i.ibb.co/Hxs9873/logo.png" alt="" />
                        <Link to={'/'}><a className="btn btn-ghost text-3xl">HostelHub</a></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to={'/'}><li className="text-xl hover:text-2xl font-semibold mx-2">Home</li></Link>
                        <Link to={'/meals'}><li className="text-xl hover:text-2xl font-semibold mx-2">Meals</li></Link>
                        <Link to={'/upcomingMeals'}><li className="text-xl hover:text-2xl font-semibold mx-2">Upcoming Meal</li></Link>
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                    {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
                                </div>
                            </button>
                        </label>
                        {/* <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul> */}
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {
                                user ?
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                    :
                                    <div className="w-10 rounded-full">
                                        <img src="https://cdn-icons-png.flaticon.com/512/4086/4086679.png" />
                                    </div>
                            }
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                user ?

                                    <li className="text-lg font-semibold hover:text-2xl">{user.displayName}</li>

                                    :

                                    <li className="text-lg font-semibold hover:text-2xl">User Name</li>

                            }
                            {

                            }
                            {
                                dbRole.role != 'admin' &&
                                <Link to={'/userdashboard'}><li className="text-lg font-semibold hover:text-2xl">User Dashboard</li></Link>
                            }
                            {
                                dbRole.role != 'admin' &&
                                <Link to={'/checkout'}><li className="text-lg font-semibold hover:text-2xl">Checkout</li></Link>
                            }
                            {
                                dbRole.role == 'admin' &&
                                <Link to={'/admindashboard'}><li className="text-lg font-semibold hover:text-2xl">Admin Dashboard</li></Link>
                            }
                            {
                                user ?
                                    <Link to={'/login'}>
                                        <div onClick={handleSignOut} className="text-lg flex items-center gap-1 font-semibold hover:text-2xl">Log Out<TbLogin></TbLogin></div>
                                    </Link>
                                    :
                                    <Link to={'/login'}>
                                        <div className="text-lg flex items-center gap-1 font-semibold hover:text-2xl">Login<TbLogin2></TbLogin2></div>
                                    </Link>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;