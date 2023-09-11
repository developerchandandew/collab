import Communities from "../Communities";
import Footer from "../Footer";
import Navigation from "../Navigation";
import OurAction from "../OurAction";
import { Link } from 'react-router-dom';
import CountUp from "react-countup";

const Home = () => {
    return (
        <>
            <Navigation />
            <div className="w-full mb-20 xl:flex xl:justify-between">
                <div className="w-full xl:w-1/5 xl:pt-[20%] px-10">
                    <img src="images/Cac_Logo.svg" alt="Logo" className="py-6 px-3" />
                    <div>
                        <p className="px-2 xl:text-2xl lg:text-xl">…is a dynamic humanitarian emergency platform that builds the resilience of Vulnerable People and their institutions, in their everyday emergencies, and is ready for future humanitarian crises.</p>
                        <button className="my-5 bg-[#f95a00] text-white p-3 ml-6 rounded-md xl:my-10">FIND OUT MORE</button>
                    </div>
                </div>
                <div className="w-full xl:w-4/5">
                    <img src="images/home/spinner.png" alt="w-full" />
                </div>
            </div>
            {/* mobile */}
            <div className="w-full h-[100vh] bg-[url('images/home/home-first-bg.svg')] bg-cover bg-no-repeat relative flex justify-between flex-wrap md:hidden">
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-yellow-400 to-blue-400 opacity-[.6]"></div>
                <div className="w-full p-4 text-center z-10">
                    <p className="p-2  text-left text-white">Taking the legacy of #COVIDActionCollab forward, Community Action Collab orchestrates and influences the actions and decisions of its partners, the Government and other alliances, enabling them to solve issues affecting 10 million vulnerable people and ensuring they access critical livelihood, health, social protection and climate impact solutions.</p>
                    <Link to='/about'>
                        <button className="bg-yellow-500 rounded-md p-3 ">FIND OUT MORE</button>
                    </Link>
                </div>
                <img src="images/home/home-left-1.png" alt="actions" className="w-1/2 z-10" />
                <img src="images/home/home-right-1.png" alt="actions" className="w-1/2  z-10" />
            </div>

            {/* tablet and desktop  */}
            <div className="hidden md:block">
            <div className=" w-full h-[100vh] bg-[url('src/images/home/home-first-bg.svg')] bg-cover bg-no-repeat relative flex justify-between">
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-yellow-400 to-blue-400 opacity-[.6]"></div>
            <img src="images/home/home-left-1.png" alt="actions" className="w-[30%] h-[60%] mt-[33%] lg:mt-[25%] z-10 xl:mt-[18.5%]" />

                <div className="w-3/5 text-center z-10 xl:mt-[13%]">
                <p className="p-2  text-center text-white text-2xl lg:w-4/5 lg:m-auto xl:text-3xl ">Taking the legacy of #COVIDActionCollab forward, Community Action Collab orchestrates and influences the actions and decisions of its partners, the Government and other alliances, enabling them to solve issues affecting 10 million vulnerable people and ensuring they access critical livelihood, health, social protection and climate impact solutions.</p>
                    <Link to='/about'>
                        <button className="bg-yellow-500 rounded-md p-3 my-4 xl:my-8 xl:text-2xl">FIND OUT MORE</button>
                    </Link>
                </div>
                <img src="images/home/home-right-1.png" alt="actions" className="w-[30%] h-[60%] mt-[33%] lg:mt-[25%] z-10 xl:mt-[18.5%]" />

            </div>
            </div>



            <h1 className="text-[#1C7C9C] my-6 text-2xl px-2 font-semibold lg:text-5xl lg:px-4">Our Action</h1>
            <p className="my-4 px-2 md:text-lg lg:text-2xl lg:px-4">CAC deploys a three-pronged approach to build the resilience of vulnerable communities to not just survive but also thrive amidst a crisis:</p>
            <OurAction />
            <div className="w-full text-center">
                <button className="text-center text-[#f95a00] border-2 border-[#f95a00] rounded-md my-6 p-2 xl:text-xl">LEARN MORE</button>
            </div>

            <h1 className="text-[#1C7C9C] my-6 text-2xl font-semibold px-2 lg:text-4xl lg:px-4 xl:text-5xl">Our Impact</h1>
            <p className="my-4 px-2  md:text-lg lg:text-xl lg:px-4 xl:text-2xl">Since March 2020, #COVIDActionCollab, powered by its diverse and determined partners across India, has been working tirelessly to reach the last mile. #COVIDActionCollab is now Community Action Collab and our impact continues on…</p>

            <div className="w-full md:flex md:justify-between">
                <div className="w-full flex justify-between md:w-1/2">
                    <div className="w-1/2">
                        <img src="images/home/home-third-1.jpeg" alt="impact" className="w-full h-full"/>
                    </div>
                    <div className="w-1/2 bg-[#1C7C9C] text-white flex flex-wrap justify-center items-center">
                        <div className="text-center">
                        <h1 className="text-2xl font-bold  xl:text-3xl">
                            <CountUp start={0} end={368} duration={3} delay={2}/></h1>
                        <h1 className=" text-xl xl:text-2xl">Partner</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between md:w-1/2">
                    <div className="w-1/2">
                        <img src="images/home/home-third-2.png" alt="impact" className="w-full h-full"/>
                    </div>
                    <div className="w-1/2 bg-[#fdd800]  flex flex-wrap justify-center items-center">
                        <div className="text-center">
                        <h1 className=" text-2xl font-bold  xl:text-3xl">2.8 CR</h1>
                        <h1 className="text-xl xl:text-2xl font-semibold">Service Intanse</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between md:w-1/2">
                    <div className="w-1/2">
                        <img src="images/home/home-third-3.jpeg" alt="impact" className="w-full h-full"/>
                    </div>
                    <div className="w-1/2 bg-[#383838] text-white flex flex-wrap justify-center items-center">
                        <div className="text-center">
                        <h1 className=" text-2xl font-bold xl:text-3xl">
                        <CountUp start={0} end={36} duration={3} delay={2}/></h1>
                        <h1 className="text-xl xl:text-2xl">Across all states & Union Territories</h1>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-[#1C7C9C] my-6 text-2xl px-2 font-semibold lg:text-5xl lg:px-4">Join us</h1>
            <p className="my-4 px-2 md:text-lg lg:text-2xl lg:px-4">We’re looking to partner with organisations and individuals aspiring to empower vulnerable communities to build their resilience against any humanitarian crises.</p>
            <Communities />
            <Footer />
        </>
    );
};
export default Home;