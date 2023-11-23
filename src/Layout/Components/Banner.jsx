import Carousel from "./Carousel";

const Banner = () => {
    return (
        <div className="lg:mx-32 my-5 bg-[#cce3de]">
            <div className="lg:flex items-center justify-center p-5">
                <div className="lg:ml-20 my-5 md:my-8 lg:my-0">
                    <h1 className="badge badge-accent ml-36 md:ml-[20rem] lg:ml-0 text-white mx-auto bg-[#34a0a4] border-[#34a0a4] p-3">Welcome to</h1>
                    <h1 className="text-2xl md:text-5xl lg:text-5xl lg:pb-5 text-center font-bold">HostelHub!</h1>
                    <h1 className="text-md text-center ">Multi cuisine cafe | Complimentary food items | Two course meals | Premium food with affordable price </h1>
                </div>
                <div>
                    <Carousel></Carousel>
                </div>
            </div>
        </div>
    );
};

export default Banner;