import { useLoaderData } from "react-router-dom";
import { BiSolidBowlRice } from "react-icons/bi";
import { GiCoolSpices } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";

const MealDetails = () => {
    const meal = useLoaderData();
    const { image,item,type,ingredients, rating, like, reviews } = meal;
    return (
        <div className="">
            <div className="lg:px-32 py-10">
                <div className="hero justify-start">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={image} className=" max-w-sm rounded-lg shadow-4xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{item}</h1>
                            <p className="py-6 px-5 font-semibold list-disc flex items-center text-green-700"><BiSolidBowlRice className="text-2xl" />{type}</p>
                            <p className="py-6 px-5 font-semibold list-disc flex items-center"><GiCoolSpices className="text-2xl" />{ingredients}</p>
                            <p className="py-6 px-5 font-semibold list-disc flex items-center text-yellow-600 "><FaStar className="text-2xl" />{rating}</p>
                            <p className="py-6 px-5 font-semibold list-disc flex items-center text-red-500"><FaHeart className="text-2xl" />{like}</p>
                            <p className="py-6 px-5 font-semibold list-disc flex items-center text-purple-600"><MdRateReview className="text-2xl" />{reviews}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;