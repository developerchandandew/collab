import Footer from "../Footer";
import Navigation from "../Navigation";
import { FaAngleDown,FaAngleUp } from "react-icons/fa6";
import  {useState } from 'react';
const Economic=()=>{
    const [toggle,setToggle] = useState(false);
    const [toggle1,setToggle1] = useState(false);
    const [toggle2,setToggle2] = useState(false);
    const [toggle3,setToggle3] = useState(false);

    return(
        <>
        <Navigation/>

            <div className="w-full h-[100vh] relative bg-[url('images/initiative/economics/economic-bg.png')] bg-right bg-no-repeat bg-cover md:bg-center">
            <img src="images/initiative/economics/economic-bg.png" alt="econoic page" className="absolute top-0 left-0 h-full" />
            <div className="md:bg-gradient-to-r from-cyan-500 to-[#1C7C9C2B] opacity-[0.8] w-full h-[100vh] z-0 absolute top-0 left-0"></div>
            
                <div className="w-full bg-[#1C7C9C] text-white absolute top-0 text-center md:bg-transparent md:top-40 md:w-2/5 md:ml-10 lg:top-72">
                    <p className="py-8 md:text-3xl lg:text-5xl lg:font-semibold">Building the <span className="text-yellow-200">Economic Resilience</span> of Vulnerable Communities </p>
                </div>
            </div>

            <div className="w-full my-10 md:flex md:justify-between lg:w-4/5 lg:m-auto py-10">
                <div className="w-full md:w-1/2 ">
                    <img src="images/initiative/economics/Why_Economic_Resilience-1.png" alt="Why Economic Resilience" className="md:h-full lg:w-full"/>
                </div>
                <div className="w-full bg-[#1C7C9C] text-white px-3 py-6 md:w-1/2">
                    <h1 className="my-6 text-xl font-semibold lg:text-4xl">Why Economic Resilience ?</h1>
                    <p className="text-justify lg:text-xl">A critical component for building resilient communities is building their economic resilience. Community Action Collab’s (CAC) Economic Resilience Impact Canvas builds the resilience of vulnerable populations by enabling them to withstand any humanitarian crisis. The Impact Canvas is co-creating interventions within a community of various service providers, government agencies, financial entities, and civil societies. The initiative is about building resilience in a manner that restores hope and power within the hands of vulnerable communities.</p>
                </div>
            </div>

            <div className="up border-2 border-gray-300 rounded-md  lg:w-4/5 lg:m-auto ">
                <div className=" p-2 md:flex md:justify-between">
                    <div className="md:w-1/5">
                        <img src="images/initiative/economics/up1.png" alt="CDAR" />
                    </div>
                    <div className="md:w-4/5">
                        <p className="lg:text-xl">While economic resilience needs to be achieved at the family level, there is a need to work within and beyond the family. Together with the partners and advisors of the Impact Canvas, CAC has established an evolving framework with four key approaches to building economic resilience i.e. Conservation, Diversification, Aggregation, and Risk Pooling (CDAR).</p>
                    </div>
                </div>
                <div className=" my-4 p-2 md:flex md:justify-between">
                    <div className="md:w-1/5">
                        <img src="images/initiative/economics/up2.png" alt="CDAR" />
                    </div>
                    <div className="md:w-4/5">
                        <p className="lg:text-xl">Economic resilience is more than just facilitating services to vulnerable populations; it is also about instilling hope and aspirations, cultivating an opportunity mindset, gaining the ability to make and shape decisions, and so on. To successfully implement this, it is essential that the work is done collaboratively with the Government, Private Sector, Civil Society Organisation and Communities who need to be at the centre.</p>
                    </div>
                </div>
            </div>

            {/* framework */}
            <div className="framework w-full bg-[#E0E0E0] py-10 mt-10">
                <h1 className="text-center md:text-2xl md:py-6">CDAR Framework</h1>

                <div className="md:w-4/5 m-auto">
                <div className="w-full flex justify-between flex-wrap my-10">
                    <div className="w-1/5 bg-[#1C7C9C] p-2 lg:w-[10%]">
                        <img src="images/initiative/economics/cdar1.png" alt="CDAR" className="mt-5"/>
                    </div>
                    <div className="w-3/5 bg-[#1C7C9C] p-2 lg:w-4/5">
                        <h1 className="text-yellow-200 font-semibold lg:text-4xl">1. Conservation</h1>
                        <p className="text-white my-2 text-sm lg:text-2xl">Focus on protecting the existing resources and sources of income and reducing expenses by meeting the basic needs.</p>
                    </div>
                    <div className="w-1/5 bg-[#9ED3C3] p-2 lg:w-[10%]" onClick={()=>setToggle(!toggle)}>
                       {toggle?
                        <FaAngleUp className="text-xl m-auto mt-8"/>:
                        <FaAngleDown className="text-xl m-auto mt-8"/>}
                    </div>
                    {toggle && 
                    <div className="w-full">
                        <div className="bg-white flex justify-between">
                            <div className="w-1/5 p-2 lg:flex lg:justify-center lg:items-center">
                                <img src="images/initiative/economics/fm1.jpg" alt="" className="mt-5"/>
                            </div>
                            <div className="w-4/5 p-2">
                                <h1 className=" text-[#1C7C9C] lg:text-2xl">Reduce expenses</h1>
                                <p className="lg:text-xl">Through initiatives like providing access to social protection schemes like PDS, MGNREGA job cards, housing schemes, scholarships, and health insurances to meet expenses of day-to-day life.</p>
                            </div>
                        </div>
                        <div className="bg-white flex justify-between mb-10"> 
                            <div className="w-1/5 p-2 lg:flex lg:justify-center lg:items-center">
                                <img src="images/initiative/economics/fm2.jpg" alt=""  className="mt-5"/>
                            </div>
                            <div className="w-4/5 p-2">
                                <h1 className=" text-[#1C7C9C] lg:text-2xl">Protect the resources and sources of income of the poor</h1>
                                <p className="lg:text-xl">This could be achieved through drought-proofing of farms, insuring assets or vaccination of livestock and immunisation of children, etc.</p>
                            </div>
                        </div>
                </div>}
                </div>


                <div className="w-full flex justify-between flex-wrap my-10">
                    <div className="w-1/5 bg-[#1C7C9C] p-2 lg:w-[10%]">
                        <img src="images/initiative/economics/cdar2.png" alt="CDAR" className="mt-5"/>
                    </div>
                    <div className="w-3/5 bg-[#1C7C9C] p-2 lg:w-4/5">
                        <h1 className="text-yellow-200 font-semibold lg:text-4xl">2. Diversification</h1>
                        <p className="text-white my-2 text-sm lg:text-2xl">Bring in more income-generating aspects to the existing source of income and reduce the risk of one source being affected by a shock.</p>
                    </div>
                    <div className="w-1/5 bg-[#9ED3C3] p-2 lg:w-[10%]" onClick={()=>setToggle1(!toggle1)}>
                       {toggle1?
                        <FaAngleUp className="text-xl m-auto mt-8"/>:
                        <FaAngleDown className="text-xl m-auto mt-8"/>}
                    </div>
                    {toggle1 && 
                    <div className="w-full">
                        <div className="bg-white flex justify-between">
                            <div className="w-1/5 p-2 lg:flex lg:justify-center lg:items-center">
                                <img src="images/initiative/economics/fm3.jpg" alt="" className="mt-5"/>
                            </div>
                            <div className="w-4/5 p-2">
                                <h1 className=" text-[#1C7C9C] lg:text-2xl">Help the family save and build a larger diverse asset base</h1>
                                <p className="lg:text-xl">In the short run, cash, livestock, chits, etc. could be built and in the long run assets like gold/durables/house/education of children, etc.</p>
                            </div>
                        </div>
                        <div className="bg-white flex justify-between mb-10"> 
                            <div className="w-1/5 p-2 lg:flex lg:justify-center lg:items-center">
                                <img src="images/initiative/economics/fm4.jpg" alt=""  className="mt-5"/>
                            </div>
                            <div className="w-4/5 p-2">
                                <h1 className=" text-[#1C7C9C] lg:text-2xl">Help the family have multiple revenue sources</h1>
                                <p className="lg:text-xl">This could be wages, nano- enterprises, skill development, pensions, remittances, govt transfers, assets which are different risk factors.</p>
                            </div>
                        </div>
                </div>}
                </div>


                <div className="w-full flex justify-between flex-wrap my-10">
                    <div className="w-1/5 bg-[#1C7C9C] p-2 lg:w-[10%]">
                        <img src="images/initiative/economics/cdar3.png" alt="CDAR" className="mt-5"/>
                    </div>
                    <div className="w-3/5 bg-[#1C7C9C] p-2 lg:w-4/5">
                        <h1 className="text-yellow-200 font-semibold lg:text-4xl">3. Aggregation</h1>
                        <p className="text-white my-2 text-sm lg:text-2xl">Coming together to create better social capacity through collective voices and better negotiation of interests among different actors</p>
                    </div>
                    <div className="w-1/5 bg-[#9ED3C3] p-2 lg:w-[10%]" onClick={()=>setToggle2(!toggle2)}>
                       {toggle2?
                        <FaAngleUp className="text-xl m-auto mt-8"/>:
                        <FaAngleDown className="text-xl m-auto mt-8"/>}
                    </div>
                    {toggle2 && 
                    <div className="w-full">
                        <div className="bg-white flex justify-between">
                            <div className="w-1/5 p-2">
                                <img src="images/initiative/economics/fm5.jpg" alt="" className="mt-5"/>
                            </div>
                            <div className="w-4/5 p-2 lg:flex lg:justify-center lg:items-center">
                                <h1 className=" text-[#1C7C9C] lg:text-2xl">Aggregation and organisation around production</h1>
                                <p className="lg:text-xl">Higher income to smallholders/labourers can be realised when they lower input cost, negotiate with scale in the market, etc.</p>
                            </div>
                        </div>
                        <div className="bg-white flex justify-between "> 
                            <div className="w-1/5 p-2">
                                <img src="images/initiative/economics/fm6.jpg" alt=""  className="mt-5"/>
                            </div>
                            <div className="w-4/5 p-2 lg:flex lg:justify-center lg:items-center">
                                <h1 className=" text-[#1C7C9C] lg:text-2xl">Collective identity around social groupings</h1>
                                <p className="lg:text-xl">Changes in social terms comes when one gets social status and able to get mutual support system to address adversaries.</p>
                            </div>
                        </div>
                        <div className="bg-white flex justify-between mb-10"> 
                            <div className="w-1/5 p-2 lg:flex lg:justify-center lg:items-center">
                                <img src="images/initiative/economics/fm7.jpg" alt=""  className="mt-5"/>
                            </div>
                            <div className="w-4/5 p-2">
                                <h1 className=" text-[#1C7C9C] lg:text-2xl">Collective voices</h1>
                                <p className="lg:text-xl">Building capacity of the communities to voice their collective opinions, demands and bring power to influence decision making agencies.</p>
                            </div>
                        </div>
                </div>}
                </div>


                <div className="w-full flex justify-between flex-wrap my-10 pb-10">
                    <div className="w-1/5 bg-[#1C7C9C] p-2 lg:w-[10%]">
                        <img src="images/initiative/economics/cdar1.png" alt="CDAR" className="mt-5"/>
                    </div>
                    <div className="w-3/5 bg-[#1C7C9C] p-2 lg:w-4/5">
                        <h1 className="text-yellow-200 font-semibold lg:text-4xl">4. Risk Pooling</h1>
                        <p className="text-white my-2 text-sm lg:text-2xl">Build mechanisms to reduce risks to income sources and assets. This includes creating social and physical resources to manage risks and mitigating them.</p>
                    </div>
                    <div className="w-1/5 bg-[#9ED3C3] p-2 lg:w-[10%]" onClick={()=>setToggle3(!toggle3)}>
                       {toggle3?
                        <FaAngleUp className="text-xl m-auto mt-8"/>:
                        <FaAngleDown className="text-xl m-auto mt-8"/>}
                    </div>
                    {toggle3 && 
                    <div className="w-full">
                        <div className="bg-white flex justify-between">
                            <div className="w-1/5 p-2 lg:flex lg:justify-center lg:items-center">
                                <img src="images/initiative/economics/fm7.jpg" alt="" className="mt-5 "/>
                            </div>
                            <div className="w-4/5 p-2">
                                <h1 className=" text-[#1C7C9C] lg:text-2xl">Set up informal insurance mechanisms</h1>
                                <p className="lg:text-xl">Friendly neighbours, helpful relatives, benefactors/patrons to help when risk hits.</p>
                            </div>
                        </div>
                        <div className="bg-white flex justify-between mb-10"> 
                            <div className="w-1/5 p-2 lg:flex lg:justify-center lg:items-center">
                                <img src="images/initiative/economics/fm8.jpg" alt=""  className="mt-5"/>
                            </div>
                            <div className="w-4/5 p-2">
                                <h1 className=" text-[#1C7C9C] lg:text-2xl">Set up formal insurance mechanisms</h1>
                                <p className="lg:text-xl">To ensure pooling of risks and help in adversity is a right because one is part of the pool.</p>
                            </div>
                        </div>
                </div>}
                </div>
                </div>

            </div>
                



            <div className="w-full text-center bg-white my-10">
                <h1 className="md:text-3xl font-semibold lg:text-5xl">Partners Anchoring Economic Resilience</h1>
                <p className="md:w-4/5 md:m-auto py-10 text-xl lg:text-2xl">The Pilot is led by <span className=" text-[#1C7C9C]">Vrutti</span> and funded by <span className=" text-[#1C7C9C]">Skoll Foundation</span> and <span className=" text-[#1C7C9C]">Vitol Foundation</span>. The implementing partners are <span className=" text-[#1C7C9C]">Head Held High, Transform Rural India Foundation,</span> and <span className=" text-[#1C7C9C]">Gopabandu Seva Parishad.</span></p>

                <div className="w-full flex justify-between gap-4 flex-wrap my-6 p-2">
                    <img src="images/initiative/economics/partner-1.png" alt="partners"  className="w-[30%] lg:w-[15%]"/>
                    <img src="images/initiative/economics/partner-2.png" alt="partners"  className="w-[30%] lg:w-[15%]"/>
                    <img src="images/initiative/economics/partner-3.png" alt="partners"  className="w-[30%] lg:w-[15%]"/>
                    <img src="images/initiative/economics/partner-4.png" alt="partners"  className="w-[30%] lg:w-[15%]"/>
                    <img src="images/initiative/economics/partner-5.png" alt="partners"  className="w-[30%] lg:w-[15%]"/>
                    <img src="images/initiative/economics/partner-6.png" alt="partners"  className="w-[30%] lg:w-[15%]"/>
                </div>
            </div>

            {/* storyof resilience */}
            <div className="bg-[#E0E0E0] p-2">
                <h1 className="text-center font-semibold py-6 text-2xl lg:text-6xl">Story Of Resilience</h1>

                <div className="w-full md:flex md:justify-between md:gap-4 md:flex-wrap">
                    <div className="w-full p-2 bg-white my-4 md:w-[45%]">
                        <img src="images/initiative/economics/Story-1.png" alt="story" />
                        <h1 className="my-3 font-semibold lg:text-2xl">The Story of M.Bharati</h1>
                        <p className="text-sm lg:text-xl">From natural disasters to devastating epidemics, M.Bharati has seen, and survived, it all at the young age of 23 years. A resident of the Chepala Chennabai Baraf in Penthakata,...</p>

                        <button className="bg-[#9ED3C3] text-white rounded-full my-6 py-2 px-6 lg:text-xl">Read More</button>
                    </div>

                    <div className="w-full p-2 bg-white my-4 md:w-[45%]">
                        <img src="images/initiative/economics/Story-2.png" alt="story" />
                        <h1 className="my-3 font-semibold lg:text-2xl">Addressing Social Issues through Wall Art</h1>
                        <p className="text-sm lg:text-xl">A boat laborer by circumstances and profession, Yatin Chappale resorted to alcohol consumption as a way of weathering the choppy waters of life.  Yatin started off as a boat owner, making a living and supporting his family...</p>

                        <button className="bg-[#9ED3C3] text-white rounded-full my-6 py-2 px-6 lg:text-xl">Read More</button>
                    </div>

                    <div className="w-full p-2 bg-white my-4 md:w-[45%]">
                        <img src="images/initiative/economics/Story-3.png" alt="story" />
                        <h1 className="my-3 font-semibold lg:text-2xl" >Art for Change</h1>
                        <p className="text-sm lg:text-xl">A 35-year-old fisherman by profession, Muthi Srinu had always known that his income of INR 10,000-15,000 per month was meager, but was sufficient to lead a quality of life that was much better than others...</p>

                        <button className="bg-[#9ED3C3] text-white rounded-full my-6 py-2 px-6 lg:text-xl">Read More</button>
                    </div>

                    <div className="w-full p-2 bg-white my-4 md:w-[45%]">
                        <img src="images/initiative/economics/Story-4.png" alt="story" />
                        <h1 className="my-3 font-semibold lg:text-2xl">An Economic Resilience Pilot</h1>
                        <p className="text-sm lg:text-xl">The pandemic has not only impacted lives by affecting people’s health, but also unearthed certain systemic issues that have disproportionately affected the lower income populations…</p>

                        <button className="bg-[#9ED3C3] text-white rounded-full my-6 py-2 px-6 lg:text-xl">Read More</button>
                    </div>

                    <div className="w-full p-2 bg-white my-4 md:w-[45%]">
                        <img src="images/initiative/economics/Story-5.png" alt="story" />
                        <h1 className="my-3 font-semibold lg:text-2xl">Educating the Way Ahead</h1>
                        <p className="text-sm lg:text-xl">As the world outside slowly falls into a lull, and her family unwinds for the night, Seeta* Solanki, a student of MA English, starts studying and preparing for her classes, till 11 pm, using her mobile phone...</p>

                        <button className="bg-[#9ED3C3] text-white rounded-full my-6 py-2 px-6 lg:text-xl">Read More</button>
                    </div>

                </div>
            </div>

            <div className="w-full h-[10vh] bg-gradient-to-r from-cyan-500 to-[#1C7C9C2B]"></div>
        <Footer/>
        </>
    )
}
export default Economic