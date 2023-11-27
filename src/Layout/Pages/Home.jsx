import Banner from '../Components/Banner'
import Meals from '../Pages/Meals'
import Membership from '../Components/Membership';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Meals></Meals>
            <Membership></Membership>
            {/* menu
            deploy: npm run build firebase deploy
            <div className='lg:mx-32 my-10'>
                <h1 className='divider text-center text-3xl md:text-2xl lg:text-4xl font-bold mb-10'>Our Services</h1>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row justify-around">
                        <div>
                            <img src="https://static.vecteezy.com/system/resources/previews/008/327/511/original/healthy-breakfast-illustration-a-set-of-food-for-breakfast-morning-meal-breakfast-menu-vector.jpg" className="max-w-xl rounded-lg shadow-2xl" />
                        </div>
                        <div>
                            <ul className='font-semibold text-gray-700 text-3xl list-disc	'>
                                <li>We provide healthy foods</li>
                                <li>We provide nutritious food</li>
                                <li>We maintain proper hygene</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* featured foods */}
            <div className='lg:mx-32 my-10'>
                <h1 className=' divider text-center text-3xl font-semibold'>Our Featured Foods</h1>
                <div className=' mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-10">
                        <figure><img className='h-80 w-96' src="https://ikkaskitchen.com.au/cdn/shop/products/goat_91f3f091-da4f-440c-9df8-8e0ff52af7e4.jpg?v=1640588550" alt="foods" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Biriyani</h2>
                            <p>Also knwon as KACCHI Biriyani</p>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-10">
                        <figure><img className='h-80 w-96' src="https://4.bp.blogspot.com/-iKoHnLrQ4No/T-d7q4Fz_7I/AAAAAAAAAZk/Vbh12KVdkvc/s1600/ilish_polao.JPG" alt="foods" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Ilish Polao</h2>
                            <p>Ilish from Padma</p>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto  mb-10">
                        <figure><img className='h-80 w-96' src="https://slurrp.club/wp-content/uploads/2017/09/DSC_1891.jpg" alt="foods" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Chingri Malai Curry</h2>
                            <p>Shrimp known as Chingri</p>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-10">
                        <figure><img className='h-80 w-96' src="https://qph.cf2.quoracdn.net/main-qimg-36c9dc8edffe088f56141dc23d100e41-lq" alt="foods" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Kebab with Paratha</h2>
                            <p>Paratha Kabab with Salad</p>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto  mb-10">
                        <figure><img className='h-80 w-96' src="https://www.healthyseasonalrecipes.com/wp-content/uploads/2019/12/greek-pizza-21-001.jpg" alt="foods" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Pizza</h2>
                            <p>Margarita Pizza</p>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto  mb-10">
                        <figure><img className='h-80 w-96' src="https://sgp1.digitaloceanspaces.com/cosmosgroup-dc/news/qqwYxlIFK9HiYbgQj1uWjvT11UgYs3IsCj5gD3dc.jpeg" alt="foods" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Sweets</h2>
                            <p>Roshogolla for Sweets</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;