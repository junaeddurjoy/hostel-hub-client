import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Root = () => {
    const location = useLocation();
    const noheader= location.pathname.includes('login');
    const nofooter= location.pathname.includes('registration');
    return (
        <div>
            { noheader || nofooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noheader || nofooter || <Footer></Footer>}
        </div>
    );
};

export default Root;