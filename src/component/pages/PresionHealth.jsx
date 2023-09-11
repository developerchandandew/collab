import Footer from "../Footer";
import Navigation from "../Navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PresionHealth = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1450 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1440, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1020, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Navigation />
            <div className="w-full h-[100vh] relative">
                <video src="images/initiative/health/bnr_dsktp.mp4" type="video/mp4" autoPlay muted loop className="w-full h-[100vh] absolute top-0 left-0"></video>
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.5]"></div>
                <div className="w-[90%] absolute top-44 left-10 lg:w-2/5">
                    <h1 className="text-yellow-400 text-2xl lg:text-4xl">#CommunityActionCollab Initiative </h1>
                    <h1 className="text-white text-5xl lg:text-8xl">Precision Health Platform </h1>
                </div>
            </div>

            <div className="w-full p-2 xl:flex xl:justify-between xl:my-10">
                <div className="w-full xl:w-1/2">
                    <img src="images/initiative/health/who_we_are.jpg" alt="who we are" />
                </div>
                <div className="w-full xl:w-1/2 xl:p-4">
                    <h1 className="text-2xl font-bold my-4 xl:my-0 xl:text-4xl">Who we are? </h1>
                    <p className="my-4 lg:text-xl xl:text-2xl">Precision Health  Platform, envisages a <span className="font-bold">comprehensive yet decentralized environmental surveillance system </span> coupled with <span className="font-bold">geospatial intelligence</span> and <span className="font-bold">intelligence gathering through community participation</span>  to enable development and utilization of a real-time, data driven decision support system in urban planning and pblic health management while keeping equity at the center.</p>

                    <p className="my-4 lg:text-xl xl:text-2xl">The end result of this sophistication system is simple: establish an early warning system that communities and city governments can use to strengthen their response and improve the overall public  health ecosystem, thereby  creating lasting impact for the most marginalized communities living in these cities. The approach at its core believes that climate, health and social inequalities are highly interrelated and thus needs to be solvd in an integrated, One Health fashion.</p>

                    <p className="my-4 lg:text-xl xl:text-2xl">With the interest in environmental surveillance as a public health tool, ignited by the COVID pandemic, we’d like to use this momentum gained.</p>
                </div>
            </div>

            <div className="w-full h-[100vh] bg-[url('images/initiative/health/Untitled-design.jpg')] bg-fixed bg-cover bg-no-repeat flex justify-center items-center relative">
                <div className="w-full text-center text-white lg:w-1/2">
                    <h1 className="text-xl font-bold lg:text-4xl xl:text-6xl">The change we want to bring </h1>
                    <p className="my-4 lg:text-xl xl:text-3xl">We are passionate about revolutionizing the public health surveillance systems in India and globally by tapping into the power of environmental surveillance - thus mainstreaming the environmental surveillance system as a public health tool.</p>
                </div>
                <div className="w-full h-[20vh] bg-[url('images/initiative/health/shade_shape.png')] bg-cover bg-no-repeat absolute bottom-0 left-0"></div>
            </div>

            <div className="w-full bg-[#fde579] p-2 pb-10">
                <h1 className="py-6 text-xl font-semibold lg:text-3xl xl:text-7xl mb-10 text-center">National Level COVID Surveillance Dashboard  </h1>

                <div className="xl:w-3/5 xl:m-auto">
                    <img src="images/initiative/health/dashboard.jpg" alt="dashboard" />
                </div>
            </div>

            <div className="w-full bg-white pb-20">
                <h1 className="text-center text-xl font-bold xl:text-6xl my-10">OUR PARTNERS</h1>

                <div className="conzer">
                    <Carousel responsive={responsive} autoPlay infinite arrows={false}>
                        <div className="box">
                            <img src="images/initiative/health/cms-1.jpg" alt="box" />
                        </div>
                        <div className="box">
                            <img src="images/initiative/health/com_actn_lab.png" alt="box" />
                        </div>
                        <div className="box">
                            <img src="images/initiative/health/schm-1.jpg" alt="box" />
                        </div>
                        <div className="box">
                            <img src="images/initiative/health/skoll-1.jpg" alt="box" />
                        </div>
                        <div className="box">
                            <img src="images/initiative/health/usaid-1.jpg" alt="box" />
                        </div>
                        <div className="box">
                            <img src="images/initiative/health/swasti-1.jpg" alt="box" />
                        </div>

                    </Carousel>
                </div>
            </div>



            <Footer />
        </>
    );
};
export default PresionHealth;