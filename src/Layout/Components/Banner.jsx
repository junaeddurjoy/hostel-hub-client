import Carousel from "./Carousel";

const Banner = () => {
    return (
        <div className="lg:mx-32 my-5">
            <div className="hero bg-[#cce3de]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src="https://i.ibb.co/9qgh0Rg/friends.png" className="h-[250px] md:h-[350px] lg:h-[500px] w-[400px] md:w-[700px] rounded-lg" /> */}
                    {/* <img src="https://cdni.iconscout.com/illustration/premium/thumb/friends-enjoying-dinner-3736058-3123360.png" className=" rounded-lg" /> */}
                    <div>
                        <Carousel></Carousel>
                    </div>
                    <div className="lg:ml-20">
                        <div className="badge badge-accent text-white bg-[#34a0a4] border-[#34a0a4] p-3">Welcome to</div>
                        <h1 className="md:text-3xl lg:text-5xl lg:pb-5 text-center font-bold">HostelHub!</h1>
                        <h1 className="text-md text-center ">Multi cuisine cafe | Complimentary food items | Two course meals | Premium food with affordable price </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;