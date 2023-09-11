import Footer from "../Footer";
import Navigation from "../Navigation";
import CountUp from 'react-countup';

const Impact = () => {
    return (
        <>
            <Navigation />
            <div className="w-full h-[90vh] bg-[url('images/impact/impact-bg.png')] bg-cover bg-no-repeat relative">
                <img src="images/impact/impact-bg.png" alt="imapct page" className="absolute left-0 top-0 h-full"/>
                <div className="w-full text-white bg-gradient-to-r from-[#1C7C9CF0] to-[#FD9C00E0] h-[34vh] lg:h-[28vh]  absolute bottom-0 p-4 flex justify-between">
                    {/* mobile view */}
                    <div className="w-[30%] p-2 lg:hidden">
                        <div className="text-center ">
                            <h1 className="text-xl font-bold shadow">
                                <CountUp start={0} end={368} duration={3} delay={0} />
                            </h1>
                            <p>Partners of Cac</p>
                        </div>
                        <hr className="my-2 md:hidden" />
                        <div className="text-center md:mt-6">
                            <h1 className="text-xl font-bold shadow">
                                <CountUp start={0} end={2000} duration={3} delay={0} />
                                +</h1>
                            <p>Volunteers</p>
                        </div>
                    </div>

                    <div className="w-[30%] p-2 md:border-x-2 md:border-white lg:hidden">
                        <div className="text-center ">
                            <h1 className="text-xl font-bold shadow">
                                <CountUp start={0} end={36} duration={3} delay={0} />
                            </h1>
                            <p>State & UT's</p>
                        </div>
                        <hr className="my-2 md:hidden" />
                        <div className="text-center md:mt-6">
                            <h1 className="text-xl font-bold shadow">
                                <CountUp start={0} end={2.8} duration={3} delay={0} /> CR
                            </h1>
                            <p>Services Delivered</p>
                        </div>
                    </div>

                    <div className="w-[30%] p-2 lg:hidden">
                        <div className="text-center ">
                            <h1 className="text-xl font-bold shadow">
                                <CountUp start={0} end={13} duration={3} delay={0} />
                            </h1>
                            <p>Vanurable Communities</p>
                        </div>
                        <hr className="my-2 md:hidden" />
                        <div className="text-center md:mt-6">
                            <h1 className="text-xl font-bold shadow">
                                <CountUp start={0} end={1109} duration={3} delay={0} /> CR
                            </h1>
                            <p>Resource Mobilised</p>
                        </div>
                    </div>

                    {/* desktop view */}

                    <div className="w-full hidden lg:flex lg:justify-between">

                        <div className="w-1/2 flex justify-between">
                            <div className="w-[30%] text-center py-4 border-r-2 border-white">
                                <h1 className="text-5xl font-bold shadow">
                                    <CountUp start={0} end={368} duration={3} delay={0} />
                                </h1>
                                <p className="text-2xl">Partners of Cac</p>
                            </div>

                            <div className="w-[30%] text-center py-4 ">
                                <h1 className="text-5xl font-bold shadow">
                                    <CountUp start={0} end={36} duration={3} delay={0} />
                                </h1>
                                <p className="text-2xl">State & UT's</p>
                            </div>

                            <div className="w-[30%] text-center px-2 py-4  border-x-2 border-white">
                                <h1 className="text-5xl font-bold shadow">
                                    <CountUp start={0} end={13} duration={3} delay={0} />
                                </h1>
                                <p className="text-2xl">Vanurable Communities</p>
                            </div>

                        </div>
                        <div className="w-1/2 flex justify-between">
                            <div className="w-[30%] text-center py-4 px-2">
                                <h1 className="text-5xl font-bold shadow">
                                    <CountUp start={0} end={2000} duration={3} delay={0} />
                                    +</h1>
                                <p className="text-2xl">Volunteers</p>
                            </div>

                            <div className="w-[30%] text-center px-2 py-4  border-x-2 border-white">
                                <h1 className="text-5xl font-bold shadow">
                                    <CountUp start={0} end={2.8} duration={3} delay={0} /> CR
                                </h1>
                                <p className="text-2xl">Services Delivered</p>
                            </div>

                            <div className="w-[30%] text-center py-4 ">
                                <h1 className="text-5xl font-bold shadow">
                                    <CountUp start={0} end={1109} duration={3} delay={0} /> CR
                                </h1>
                                <p className="text-xl font-semibold">Resource Mobilised</p>
                            </div>


                        </div>


                    </div>
                </div>

            </div>

            <div className="w-full bg-gradient-to-r from-[#1C7C9CF0] to-[#FD9C00E0] h-[10vh]  p-4 xl:hidden">

                <select className="w-3/5 mx-16 p-2 border-none md:w-1/2 md:mx-40 lg:mx-56">
                    <option value="in this section">IN THIS SECTION</option>
                    <option value="in this section">IN THIS SECTION</option>
                    <option value="in this section">IN THIS SECTION</option>

                </select>
            </div>

            <div className="hidden xl:block w-full bg-gradient-to-r from-[#1C7C9CF0] to-[#FD9C00E0] h-[10vh]  p-4 relative">
                <div className=" left-8 top-8 sticky w-[15%]">
                    <h1 className="bg-white  rounded-md p-6 sticky text-center ">IN THIS SECTION</h1>
                    <ul className="bg-gray-300 p-2 text-xl ">
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">All Communities</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Covid Response</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Factory unorganized workers</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Fisherfolk</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Gay men and Transgender</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Health Workers</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">In & Out of school children</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Migrent</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">organization</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Person with Disabilities</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Person Living with HIV</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Sex workers</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Small Farmer</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Street Children</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Street vendors</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Tribals</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Urban Poor</li>
                        <li className="my-3 border-b-2 border-white px-2 cursor-pointer">Vaccination</li>
                    </ul>
                </div>

            </div>

            <div className="w-full xl:w-4/5 xl:ml-[20%]">
                <div className="w-full flex flex-col p-3 lg:flex-row lg:justify-between xl:w-4/5 xl:m-auto">
                    <input type="text" name="search" placeholder="Enter text to search" className="p-2 text-gray-500 border-2 border-gray-200 rounded-md lg:w-3/4 lg:p-0 lg:ml-3 lg:h-10 lg:mt-2 xl:w-4/5 xl:mt-3 outline-none px-3" />

                    <select className="w-full p-2 border-2 border-gray-300 my-3 lg:w-1/5">
                        <option value="since the begining">Since the begining</option>
                        <option value="Last Updated">Last Updated</option>
                        <option value="By Date">By Date</option>
                        <option value="Order By">Order By</option>
                    </select>
                </div>

                <div className="w-full p-5 md:w-4/5 md:m-auto md:flex md:justify-between md:flex-wrap md:gap-4">

                    <div className="w-full bg-[#E7F1F4] md:w-2/5  xl:w-[30%] xl:mt-5">
                        <img src="images/impact/comm-1.png" alt="" className="w-full" />
                        <p className="px-3 my-6 pb-6">From Advocacy to Action: Sai’s Efforts in Empowering Vulnerable Women</p>
                    </div>

                    <div className="w-full bg-[#E7F1F4] md:w-2/5 xl:w-[30%] xl:mt-5">
                        <img src="images/impact/comm-1.png" alt="" className="w-full" />
                        <p className="px-3 my-6 pb-6">From Advocacy to Action: Sai’s Efforts in Empowering Vulnerable Women</p>
                    </div>

                    <div className="w-full bg-[#E7F1F4] md:w-2/5 xl:w-[30%] xl:mt-5">
                        <img src="images/impact/comm-1.png" alt="" className="w-full" />
                        <p className="px-3 my-6 pb-6">From Advocacy to Action: Sai’s Efforts in Empowering Vulnerable Women</p>
                    </div>

                    <div className="w-full bg-[#E7F1F4] md:w-2/5 xl:w-[30%] xl:mt-5">
                        <img src="images/impact/comm-1.png" alt="" className="w-full" />
                        <p className="px-3 my-6 pb-6">From Advocacy to Action: Sai’s Efforts in Empowering Vulnerable Women</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};
export default Impact;