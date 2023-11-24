import { useEffect, useState } from "react";
import UpcomingMealCard from "../Components/UpcomingMealCard";

const UpcomingMeals = () => {
    const [meals, setMeals] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/meal')
        .then(res => res.json())
        .then(data => setMeals(data));
    },[])
    return (
        <div>
            <div className='lg:mx-32 my-10'>
                <div className="divider text-2xl lg:text-4xl font-semibold">Our Meals</div>
                <div className=" mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    {
                        meals.map(meal => <UpcomingMealCard
                            key={meal.meal_id}
                            meal = {meal}
                        ></UpcomingMealCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UpcomingMeals;