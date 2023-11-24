import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Membership = () => {
    return (
        <div>
            <div className='lg:mx-32 my-10'>
                <div className="divider text-2xl lg:text-4xl font-semibold">Our Memberships</div>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mt-8 '>
                    <div className='hover:bg-base-200 rounded-2xl'>
                        <img className="h-52 w-52 mx-auto" src="https://i.ibb.co/2gGFrW7/silver-image-orig-removebg-preview.png" alt="" />
                        <p className='text-center text-gray-400 font-semibold'>Silver Package</p>
                        <p className='flex text-3xl font-bold justify-center '>5000<FaBangladeshiTakaSign /><sub className='text-xl'>/month</sub></p>
                    </div>
                    <div className='hover:bg-base-200'>
                        <img className="h-52 w-52 mx-auto" src="https://i.ibb.co/1fsTSqD/gold-level-image-orig-removebg-preview.png" alt="" />
                        <p className='text-center text-yellow-600 font-semibold'>Golden Package</p>
                        <p className='flex text-3xl font-bold justify-center '>8000<FaBangladeshiTakaSign /><sub className='text-xl'>/month</sub></p>
                    </div>
                    <div className='hover:bg-base-200'>
                        <img className="h-52 w-52 mx-auto" src="https://icon-library.com/images/platinum-icon/platinum-icon-0.jpg" alt="" />
                        <p className='text-center text-gray-500 font-semibold'>Platinum Package</p>
                        <p className='flex text-3xl font-bold justify-center '>10000<FaBangladeshiTakaSign /><sub className='text-xl'>/month</sub></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;