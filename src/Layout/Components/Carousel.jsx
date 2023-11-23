import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
const Carousel = () => {
    return (
        <div>
            <div className="carousel lg:w-2/3 lg:ml-48">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/friends-playing-table-games-3736059-3123361.png?f=webp" className="mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle text-black"><FaAngleLeft /></a>
                        <a href="#slide2" className="btn btn-circle text-black"><FaAngleRight /></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/friends-enjoying-dinner-3736058-3123360.png" className="mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle text-black"><FaAngleLeft /></a>
                        <a href="#slide3" className="btn btn-circle text-black"><FaAngleRight /></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/couple-on-romantic-dinner-date-at-home-3736061-3123363.png?f=webp" className="mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle text-black"><FaAngleLeft /></a>
                        <a href="#slide4" className="btn btn-circle text-black"><FaAngleRight /></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/9qgh0Rg/friends.png" className="mx-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle text-black"><FaAngleLeft /></a>
                        <a href="#slide1" className="btn btn-circle text-black"><FaAngleRight /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;