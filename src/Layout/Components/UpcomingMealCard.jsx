/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const UpcomingMealCard = ({ meal }) => {
    const { _id, item, image, ingredients, post_time, launch } = meal;
    console.log(_id);
    return (
        <>
            {
                launch == "upcoming" &&
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-10">
                    <figure><img className='h-80 w-96' src={image} alt="foods" /></figure>
                    <div className="card-body grid grid-cols-2">
                        <div>
                            <h2 className="card-title">{item}</h2>
                            <p>{ingredients}</p>
                        </div>
                        <div className="justify-end">
                            <Link to={`/mealdetails/${_id}`}><button className="ml-20 btn btn-active btn-accent text-white text-lg font-light">Details</button></Link>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
export default UpcomingMealCard;