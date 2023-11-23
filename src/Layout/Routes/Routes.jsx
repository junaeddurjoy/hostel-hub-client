import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root";
import App from "../../App";
import Home from "../Pages/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        }
      ]
    },
  ]);