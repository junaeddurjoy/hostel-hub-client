import { useEffect, useState } from "react";
import MealCard from "../Components/MealCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/meal')
            .then(res => res.json())
            .then(data => setMeals(data));
    }, [])
    return (
        <div>
            <div className='lg:mx-32 my-10'>
                <div className="divider text-2xl lg:text-4xl font-semibold">Our Meals</div>
                <Tabs>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>BreakFast</Tab>
                        <Tab>Lunch</Tab>
                        <Tab>Dinner</Tab>
                    </TabList>

                    <TabPanel>
                        <h2><div className=" mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                            {
                                meals.map(meal => <MealCard
                                    key={meal.meal_id}
                                    meal={meal}
                                    meal_type={''}
                                ></MealCard>)
                            }
                        </div></h2>
                    </TabPanel>
                    <TabPanel>
                        <div className=" mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                            {
                                meals.map(meal => <MealCard
                                    key={meal.meal_id}
                                    meal={meal}
                                    meal_type={'breakfast'}
                                ></MealCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                            {
                                meals.map(meal => <MealCard
                                    key={meal.meal_id}
                                    meal={meal}
                                    meal_type= {'lunch'}
                                ></MealCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                            {
                                meals.map(meal => <MealCard
                                    key={meal.meal_id}
                                    meal={meal}
                                    meal_type={'dinner'}
                                ></MealCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
                {/* <div className=" mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    {
                        meals.map(meal => <MealCard
                            key={meal.meal_id}
                            meal={meal}
                        ></MealCard>)
                    }
                </div> */}
            </div>
        </div>
    );
};

export default Meals;