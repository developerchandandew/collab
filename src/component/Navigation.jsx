import { FaBars, FaXmark, FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
    const [toggle, setToggle] = useState(false);
    const [innertoggle, setInnertoggle] = useState(false);
    return (
        <>
            <div className="w-full bg-white flex justify-between relative lg:hidden">
                <Link to='/home'>
                    <div className="w-4/5 p-1 md:w-1/2 my-2 ">
                        <img src="images/Cac_Logo.svg" alt="Logo" className="m-auto md:ml-6" />

                    </div></Link>
                <div className="w-1/5 flex justify-center items-center" onClick={() => setToggle(!toggle)}>
                    {toggle ? <FaXmark /> : <FaBars />}
                </div>
                {toggle &&
                    <ul className="w-full absolute top-16 left-0 bg-white p-3 transition-400 transition-ease-in-ease-out z-20 md:top-12">
                        <Link to='/home'>
                            <li className="border-b-2 border-sky-500 py-2 hover:text-white">Home</li>
                        </Link>
                        <Link to='/about'>
                            <li className="border-b-2 border-sky-500 py-2 hover:text-white">About Us</li>
                        </Link>
                        <Link to='/action'>
                            <li className="border-b-2 border-sky-500 py-2 hover:text-white">Action</li>
                        </Link>
                        <Link to='/impact'>
                            <li className="border-b-2 border-sky-500 py-2 hover:text-white">Impact</li>
                        </Link>
                        <li className="border-b-2 border-sky-500 py-2 flex gap-8 relative" onClick={() => setInnertoggle(!innertoggle)}>Initiatives  {innertoggle ? <FaChevronUp className="mt-1" /> : <FaChevronDown className="mt-1" />}
                        </li>
                        {innertoggle &&
                            <ul className="w-full ">
                                <Link to='/initiative/shilp'>
                                    <li className="border-b-2 border-sky-500 py-2 px-4">SHILP</li>
                                </Link>
                                <Link to='/initiative/economic'>
                                    <li className="border-b-2 border-sky-500 py-2 px-4">Economic Resilience</li>
                                </Link>
                                <Link to='/initiative/vaxnow'>
                                    <li className="border-b-2 border-sky-500 py-2 px-4">VaxNow</li>
                                </Link>
                                <Link to='/initiative/presionhealth'>
                                    <li className="border-b-2 border-sky-500 py-2 px-4">Precision Health</li>
                                </Link>
                            </ul>}
                        <Link to='/join'>
                            <li className="border-b-2 border-sky-500 py-2 ">Join Us</li>
                        </Link>
                        <Link to='/contact'>
                            <li className="border-b-2 border-sky-500 py-2 ">Contact Us</li>
                        </Link>
                    </ul>}
            </div>

            {/* desktop navbar */}
            <div className="w-full hidden lg:flex lg:justify-between p-4 lg:font-semibold bg-white ">
                <Link to='/home'>
                    <div className="">
                        <img src="images/Cac_Logo.svg" alt="Logo" className="w-full"/>
                    </div>
                </Link>

                <ul className="w-4/5 flex justify-between xl:text-xl ">
                    <Link to='/home'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/action'>
                        <li>Action</li>
                    </Link>
                    <Link to='/impact'>
                        <li>Impact</li>
                    </Link>
                    <li className="flex gap-3 relative" onClick={() => setInnertoggle(!innertoggle)}>Initiative {innertoggle ? <FaChevronUp className="mt-1" /> : <FaChevronDown className="mt-1" />}</li>
                    {innertoggle &&
                        <ul className=" absolute top-16 right-56 bg-white  rounded-md lg:top-20 z-50 xl:right-[24%] xl:top-20 z-100 p-2 pt-0">
                            <Link to='/shilp'>
                                <li className="border-b-2 border-t-4 border-sky-400 py-2 px-2">SHILP</li>
                            </Link>
                            <Link to='/economic'>
                                <li className="border-b-2 border-sky-400 py-2 px-2">Economic Resilience</li>
                            </Link>
                            <Link to='/VaxNow'>
                                <li className="border-b-2 border-sky-400 py-2 px-2">VaxNow</li>
                            </Link>
                            <Link to='/presionhealth'>
                                <li className=" py-2 px-2">Presion Health</li>
                            </Link>
                        </ul>}
                    <Link to='/join'>
                        <li>Join Us</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact Us</li>
                    </Link>
                </ul>

            </div>
        </>
    );
};
export default Navigation;