import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
const MyReviews = () => {
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
                rev
            </div>
        </div>
    );
};

export default MyReviews;