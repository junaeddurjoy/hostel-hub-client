import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home";
import UpcomingMeals from "../Pages/UpcomingMeals";
import Meals from "../Pages/Meals";
import MealDetails from "../Components/MealDetails";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import UserDashboard from "../Pages/UserDashboard";
import AdminDashboard from "../Pages/AdminDashboard";
import CheckOut from "../Pages/CheckOut";
import RequestedMeals from "../Pages/RequestedMeals";
import MyReviews from "../Pages/MyReviews";
import ManageUsers from "../Pages/ManageUsers";
import AddMeal from "../Pages/AddMeal";
import AllMeal from "../Pages/AllMeal";
import AllReviews from "../Pages/AllReviews";
import ServeMeal from "../Pages/ServeMeal";
import UpcomingMealDashboard from "../Pages/UpcomingMealDashboard";
import UpdateUser from "../Pages/UpdateUser";
import UpdateMeal from "../Pages/UpdateMeal";

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
      {
        path: "/mealdetails/:id",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/meal/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/userdashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "/admindashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "/requestedmeals",
        element: <RequestedMeals></RequestedMeals>,
      },
      {
        path: "/myreviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/addmeal",
        element: <AddMeal></AddMeal>,
      },
      {
        path: "/allmeal",
        element: <AllMeal></AllMeal>,
      },
      {
        path: "/allreviews",
        element: <AllReviews></AllReviews>,
      },
      {
        path: "/servemeal",
        element: <ServeMeal></ServeMeal>,
      },
      {
        path: "/upcomingmealdashboard",
        element: <UpcomingMealDashboard></UpcomingMealDashboard>,
      },
      {
        path: "/manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/updateuser/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
      },
      {
        path: "/updatemeal/:id",
        element: <UpdateMeal></UpdateMeal>,
        loader: ({ params }) => fetch(`http://localhost:5000/meal/${params.id}`)
      },
    ]
  },
]);