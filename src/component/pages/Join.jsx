import Communities from "../Communities";
import Footer from "../Footer";
import Navigation from "../Navigation";

const Join=()=>{
    return(
        <>
        <Navigation/>
        <div className="w-full bg-[url('images/join-bg.jpeg')] bg-cover bg-no-repeat relative h-[80vh] ">
            <img src="images/join-bg.jpeg" alt="join page" className="absolute top-0 left-0 z-0 h-full " />
            <div className="hidden md:w-full md:h-full md:bg-gradient-to-r from-[#1C7C9C] to-[#1C7C9C2B] opacity-[0.8] absolute top-0 left-0 md:block "></div>

            <div className="w-full bg-[#1C7C9C] text-white p-3 absolute left-0 bottom-0 md:w-3/5 md:text-xl md:p-12 md:bg-transparent md:top-12  lg:top-32 lg:w-2/5">
                <p className="text-center my-3 lg:text-3xl">If you are about empowering vulnerable communities to build resilience to bounce forward in any humanitarian crisis, Join us!</p>
            </div>
        </div>

        <Communities/>
        <Footer/>
        </>
    )
}
export default Join