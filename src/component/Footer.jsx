import { FaLinkedinIn,FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer=()=>{
    return(
        <>
        <div className="w-full flex flex-wrap justify-between bg-[#262626] p-2 md:px-20 lg:text-xl">
            <div className="w-1/2  underline text-white px-2 md:w-[30%] lg:w-1/5">
                <h1 className="py-4 ">Sitemap</h1>
                <ul className="text-center md:text-left">
                    <Link to='/about'>
                    <li>About Us</li>
                    </Link>
                    <Link to='/about'>
                    <li>Our Mission</li>
                    </Link>
                    <Link to='/about'>
                    <li>What is Community action collab</li>
                    </Link>
                    <Link to='/action'>
                    <li>Media</li>
                    </Link>
                    <Link to='/action'>
                    <li>Action</li>
                    </Link>
                    <Link to='/impact'>
                    <li>Impact</li>
                    </Link>
                </ul>
            </div>

            <div className="w-1/2 text-center underline text-white px-2 md:w-[30%] md:text-left lg:w-1/5">
                <ul className="pt-14">
                <Link to='/shilp'>
                    <li>Shilp</li>
                </Link>
                <Link to='/economic'>
                    <li>Economic Resilience</li>
                </Link>
                <Link to='/vaxnow'>
                    <li>Special Focus Area (VaxNow)</li>
                </Link>
                <Link to=''>
                    <li>Invest for Impact</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact Us</li>
                </Link>
                    <li className="flex my-3"><FaLinkedinIn className="mx-6"/><FaTwitter/></li>
                </ul>
            </div>
            <div className="w-full text-white px-2 md:w-[35%]">
                <h1 className="font-bold my-4">Contact Us</h1>

                <p className="my-4 md:w-4/5">We would love to hear from you. Please write to us at <br/>communityactioncollab@catalysts.org</p>

                <div className="w-full flex justify-between pb-12">
                    <img src="images/footer/cms.svg" alt="Brands"  className="w-2/5" />
                    <img src="images/footer/covid.svg" alt="Covid" className="w-2/5" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer