import { useEffect, useState } from "react";
import MealCard from "../Components/MealCard";

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect( () => {
        fetch('https://hostel-hub-server.vercel.app/meal')
        .then(res => res.json())
        .then(data => setMeals(data));
    },[])
    return (
        <div>
            <div className='lg:mx-32 my-10'>
                <div className="divider text-2xl lg:text-4xl font-semibold">Our Meals</div>
                <div className=" mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    {
                        meals.map(meal => <MealCard
                            key={meal.meal_id}
                            meal = {meal}
                        ></MealCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Meals;