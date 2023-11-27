import Banner from '../Components/Banner'
import Meals from '../Pages/Meals'
import Membership from '../Components/Membership';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Meals></Meals>
            <Membership></Membership>

            {/* featured foods */}
            <div className='lg:mx-32 my-10 '>
                <h1 className=' divider text-center text-3xl font-semibold'>Our Featured Foods</h1>
                <div className='mt-14 flex flex-col lg:flex-row gap-7 items-center'>
                    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                        <div className="carousel-item">
                            <img className='h-80 my-6 w-96 rounded-lg' src="https://ikkaskitchen.com.au/cdn/shop/products/goat_91f3f091-da4f-440c-9df8-8e0ff52af7e4.jpg?v=1640588550" />
                        </div>
                        <div className="carousel-item">
                            <img className='h-80 my-6 w-96 rounded-lg' src="https://4.bp.blogspot.com/-iKoHnLrQ4No/T-d7q4Fz_7I/AAAAAAAAAZk/Vbh12KVdkvc/s1600/ilish_polao.JPG" />
                        </div>
                        <div className="carousel-item">
                            <img className='h-80 my-6 w-96 rounded-lg' src="https://slurrp.club/wp-content/uploads/2017/09/DSC_1891.jpg" />
                        </div>
                        <div className="carousel-item">
                            <img className='h-80 my-6 w-96 rounded-lg' src="https://qph.cf2.quoracdn.net/main-qimg-36c9dc8edffe088f56141dc23d100e41-lq" />
                        </div>
                        <div className="carousel-item">
                            <img className='h-80 my-6 w-96 rounded-lg' src="https://www.healthyseasonalrecipes.com/wp-content/uploads/2019/12/greek-pizza-21-001.jpg" />
                        </div>
                        <div className="carousel-item">
                            <img className='h-80 my-6 w-96 rounded-lg' src="https://sgp1.digitaloceanspaces.com/cosmosgroup-dc/news/qqwYxlIFK9HiYbgQj1uWjvT11UgYs3IsCj5gD3dc.jpeg" />
                        </div>
                        <div className="carousel-item">
                            <img className='h-80 my-6 w-96 rounded-lg' src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww" />
                        </div>
                    </div>
                    <div className='mx-10 md:mx-10 lg:mx-0'>
                        <h1 className='text-5xl font-semibold'>Foods That Transcend Taste</h1>
                        <p className='text-lg mt-3 text-justify'>Embark on a culinary journey with our curated selection of feature foods, each a masterpiece that transcends the ordinary. From exotic flavors to innovative culinary techniques, these gastronomic marvels promise a symphony for your taste buds. Dive into the rich tapestry of global cuisines, where every dish tells a story of tradition, creativity, and passion. Whether its the tantalizing street food delights of Southeast Asia or the avant-garde creations from renowned chefs, our feature foods are a celebration of diversity and culinary excellence. Prepare to be captivated by the extraordinary as you explore the world of flavors within this delectable collection.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;