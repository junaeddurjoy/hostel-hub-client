import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-center my-5">
            <img className=" mx-auto" src="https://i.ibb.co/t3MBPjL/image.png" alt="" />
            <span className="loading loading-dots loading-lg"></span>
            <Link to="/"><button className="btn btn-neutral my-5">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;