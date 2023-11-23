import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import UpcomingMeals from "../Pages/UpcomingMeals";
import Meals from "../Pages/Meals";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/upcomingMeals",
            element: <UpcomingMeals></UpcomingMeals>,
        },
        {
            path: "/meals",
            element: <Meals></Meals>,
        },
      ]
    },
  ]);