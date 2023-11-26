/* eslint-disable react/prop-types */
import { useContext } from "react";
import {Navigate, useLocation} from "react-router-dom"
import { Authcontext } from "./providers/Authprovider";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    const location = useLocation();
    if(loading){
       return <span className="loading loading-bars loading-lg text-purple-500"></span>;
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;