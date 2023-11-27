/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MealCard = ({ meal, meal_type }) => {
    const { _id, item, image, type, ingredients, post_time, launch, price } = meal;
    console.log(type, meal_type)
    return (
        <>
            {
                (meal_type == type || meal_type == '') &&
                <>
                    {
                        launch != "upcoming" &&
                        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-10">
                            <figure><img className='h-80 w-96' src={image} alt="foods" /></figure>
                            <div className="card-body grid grid-cols-2">
                                <div>
                                    <h2 className="card-title">{item}</h2>
                                    <p>{ingredients}</p>
                                    <p>{price}tk</p>
                                </div>
                                <div className="justify-end">
                                    <Link to={`/mealdetails/${_id}`}><button className="ml-20 btn btn-active btn-accent text-white text-lg font-light">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    }
                </>
            }
        </>
    );
};

export default MealCard;