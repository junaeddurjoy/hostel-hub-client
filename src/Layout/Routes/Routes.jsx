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
import PrivateRoutes from "../../PrivateRoutes";
import Payment from "../Pages/Payment";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoutes><MealDetails></MealDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://hostel-hub-server.vercel.app/meal/${params.id}`)
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
        element: <PrivateRoutes><UserDashboard></UserDashboard></PrivateRoutes>,
      },
      {
        path: "/admindashboard",
        element: <PrivateRoutes><AdminDashboard></AdminDashboard></PrivateRoutes>,
      },
      {
        path: "/checkout",
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
      },
      {
        path: "/payment",
        element: <PrivateRoutes><Payment></Payment></PrivateRoutes>,
      },
      {
        path: "/requestedmeals",
        element: <PrivateRoutes><RequestedMeals></RequestedMeals></PrivateRoutes>,
      },
      {
        path: "/myreviews",
        element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>,
      },
      {
        path: "/addmeal",
        element: <PrivateRoutes><AddMeal></AddMeal></PrivateRoutes>,
      },
      {
        path: "/allmeal",
        element: <PrivateRoutes><AllMeal></AllMeal></PrivateRoutes>,
      },
      {
        path: "/allreviews",
        element: <PrivateRoutes><AllReviews></AllReviews></PrivateRoutes>,
      },
      {
        path: "/servemeal",
        element: <PrivateRoutes> <ServeMeal></ServeMeal></PrivateRoutes>,
      },
      {
        path: "/upcomingmealdashboard",
        element: <PrivateRoutes><UpcomingMealDashboard></UpcomingMealDashboard></PrivateRoutes>,
      },
      {
        path: "/manageusers",
        element: <PrivateRoutes><ManageUsers></ManageUsers></PrivateRoutes>,
      },
      {
        path: "/updateuser/:id",
        element: <PrivateRoutes><UpdateUser></UpdateUser></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://hostel-hub-server.vercel.app/user/${params.id}`)
      },
      {
        path: "/updatemeal/:id",
        element: <PrivateRoutes><UpdateMeal></UpdateMeal></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://hostel-hub-server.vercel.app/meal/${params.id}`)
      },
    ]
  },
]);