import Footer from "../Footer";
import Navigation from "../Navigation";
import CountUp from "react-countup";

const VaxNow=()=>{
    return(
        <>
        <Navigation/>
            <div className="w-full  bg-[url('images/initiative/vaxnow/vaxbg-1.png')] bg-cover bg-no-repeat md:h-[80vh] xl:h-[90vh]">
                <img src="images/initiative/vaxnow/vaxbg-1.png" alt="vaxnow page" className="absolute top-0 left-0 h-full w-full  -z-10" />
                <h1 className="text-[#1C7C9C] font-bold text-xl text-center py-10 md:text-3xl">Let's #BounceForward with Vaccination</h1>

                <img src="images/initiative/vaxnow/vax-bg.png" alt="home" className="md:my-20 xl:w-full"/>

                <div className="w-full">
                    <h1 className="text-center my-6 text-xl font-bold xl:text-5xl xl:mt-20">If not now,then When ?</h1>
                    <p className="px-2 xl:text-3xl">VAXNOW is an initiative by #COVIDACTIONCOLLAB in partnership with Private and Public stakeholders,Civil Sociaties,Media,Community Leader and more.Our goal is to vaccinate as many people,who have not been reached,as quickly as possible.And for that...</p>
                </div>
            </div> 

            <div className="w-full my-6 md:flex md:justify-between md:p-2 lg:w-4/5 lg:m-auto mt-10">
                <div className="w-full flex justify-between my-5 p-1 md:w-[30%]">
                    <div className="w-1/5 md:flex md:justify-center md:items-center"><img src="images/initiative/vaxnow/vax-icon-1.png" alt="icons" /></div>
                    <div className="w-4/5 p-2">
                        <p className="md:mt-3 xl:text-xl">Vanurable population need to be priotized <span className="text-[#1C7C9C]">NOW</span></p>
                    </div>
                </div>
                <div className="w-full flex justify-between my-5 md:w-[30%]">
                    <div className="w-1/5 md:flex md:justify-center md:items-center"><img src="images/initiative/vaxnow/vax-icon-2.png" alt="icon" /></div>
                    <div className="w-4/5 p-2">
                        <p className="md:mt-3 xl:text-xl">Vaccine hasitancy has to be solved <span className="text-[#1C7C9C]">NOW</span></p>
                    </div>
                </div>
                <div className="w-full flex justify-between my-5 md:w-[30%]">
                    <div className="w-1/5 md:flex md:justify-center md:items-center"><img src="images/initiative/vaxnow/vax-icon-3.png" alt="icon" /></div>
                    <div className="w-4/5 p-2">
                        <p className="md:mt-3 xl:text-xl">Resource distribution gap needs to be bridged <span className="text-[#1C7C9C]">NOW</span></p>
                    </div>
                </div>
            </div>  

            <div className="w-full lg:w-4/5 lg:m-auto">
                <p className="my-5 p-2 md:font-semibold xl:text-xl">Through this initiative we aim to vaccinate between 1,00,000 to 2,00,000 vulnerable individuals per district, adding up to 10 million across India. This will help reduce the severity of the COVID-19 cases and mortality, thus relieving the strain on our health systems. This effort will foster the collaboration and communication ecosystem required to power an optimal, integrated and multi-stakeholder crisis response for future challenges.</p>
                <p className="my-5 p-2 md:font-semibold xl:text-xl"><q>VaxNow</q> leverages local strengths and applies inclusive principles to engage multi-sectoral partnerships to vaccinate 10 million vulnerable populations across India. Each partner will play a critical role in achieving the desired outcomes; (i) Private Sector Organisations: funding, technology support and procurement (ii) Government: vaccine delivery and administration, (iii) NGOs and Civil Societies: demand generation, community mobilisation and navigation support, (iv) Media:awareness and visibility and (v) Covid Action Collaborative (CAC): ‘VaxNow’ design, resource mobilisation and overall facilitation.</p>
            </div> 

            <div className="w-full p-2 lg:w-4/5 lg:m-auto">
                <p className="p-2 text-lg xl:text-xl"><span className="font-semibold">How do we take action, and build resilient communities?</span> By addressing challenges at various levels to make a lasting and life-saving impact. </p>

                <div className="w-full">
                    <div className="p-2 md:flex md:justify-between">
                        <div className="w-full flex justify-between bg-[#1C7C9C] text-white p-2 md:w-[30%]">
                            <div className="w-1/5 flex justify-center items-center"><img src="images/initiative/vaxnow/vax-com-1.png" alt="vax-comm"/></div>
                            <div className="w-4/5 text-center text-xl mt-3 xl:text-2xl"><p>INDIVIDUAL LEVEL</p></div>
                        </div>
                        <div className="bg-[#c5dfea] p-3 my-4 md:w-[30%]">
                            <ul className="list-disc ml-4 xl:text-xl">
                                <li>Awarness of benifits</li>
                                <li>Hesistancy and Myths</li>
                                <li>Digital Divide</li>
                            </ul>
                        </div>
                        <div className="bg-[#c5dfea] p-3 my-4 md:w-[30%]">
                            <ul className="list-disc ml-4 xl:text-xl">
                                <li>Demand Generation</li>
                                <li>Enable Easy Access</li>
                                <li>Pre and Post vaccine Support</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full p-2 md:flex md:justify-between">
                        <div className="w-full flex justify-between bg-[#1C7C9C] text-white p-2 md:w-[30%]"> 
                            <div className="w-1/5 flex justify-center items-center"><img src="images/initiative/vaxnow/vax-com-1.png" alt="vax-comm"/></div>
                            <div className="w-4/5 text-center text-xl mt-3 xl:text-2xl"><p>COMMUNITY LEVEL</p></div>
                        </div>
                        <div className="bg-[#c5dfea] p-3 my-4 md:w-[30%]">
                            <ul className="list-disc ml-4 xl:text-xl">
                                <li>Ownership</li>
                                <li>Social barriers</li>
                                <li>Motivation</li>
                            </ul>
                        </div>
                        <div className="bg-[#c5dfea] p-3 my-4 md:w-[30%]">
                            <ul className="list-disc ml-4 xl:text-xl">
                                <li>Laverage local strengths</li>
                                <li>Address social barriers</li>
                                <li>Incentivzation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-2 md:flex md:justify-between">
                        <div className="w-full flex justify-between bg-[#1C7C9C] text-white p-2 md:w-[30%]">
                            <div className="w-1/5 flex justify-center items-center"><img src="images/initiative/vaxnow/vax-com-3.png" alt="vax-comm"/></div>
                            <div className="w-4/5 text-center text-xl mt-3 xl:text-2xl"><p>SYSTEMATIC LEVEL</p></div>
                        </div>
                        <div className="bg-[#c5dfea] p-3 my-4 md:w-[30%]">
                            <ul className="list-disc ml-4 xl:text-xl">
                                <li>Fregmented Systems</li>
                                <li>Procurement and deployment</li>
                                <li>Indequate preparedness</li>
                            </ul>
                        </div>
                        <div className="bg-[#c5dfea] p-3 my-4 md:w-[30%] ">
                            <ul className="list-disc ml-4 xl:text-xl">
                                <li>Planing and Goverence</li>
                                <li>Engage local leader</li>
                                <li>Process acceleration</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="md:text-lg xl:text-xl">To learn more about the initiative or join us, Contact us – Covidactioncollab@catalysts.org</p>
            </div> 

            <div className="w-full my-16 lg:w-4/5 lg:m-auto pb-16">
                <h1 className="text-center font-bold text-xl xl:text-3xl">VAXNOW OPERATIONAL FRAMEWORK</h1>
                <div className="w-4/5 m-auto">
                    <img src="images/initiative/vaxnow/layer.jpg" alt="layers" />
                </div>
                <div className="p-2 xl:p-4 ">
                    <h1 className="font-bold text-2xl xl:text-3xl">The operational framework of ‘VaxNow’ comes alive through; </h1>
                    <ul className="xl:text-xl">
                        <li>● Ground-level preparation</li>
                        <li>● Demand generation through community mobilization,</li>
                        <li>● Vaccine delivery preparedness,</li>
                        <li>● Facilitation of vaccine procurement through public-private partnerships,</li>
                        <li>● Engagement with local authorities and leveraging enablers like technology for monitoring,</li>
                        <li>● A helpline for pre and post vaccine support for adverse events.</li>
                    </ul>
                </div>
            </div> 

            <div className="w-full text-center bg-[#1C7C9C] text-white">
                <h1 className="py-5 md:text-xl lg:text-2xl">IMPACT NUMBER</h1>
                <h1 className="font-bold text-xl lg:text-2xl">
                    <CountUp start={0} end={4.5} duration={3} delay={2}/>M</h1>
                <p className="pb-12 md:text-lg lg:text-xl">Vaccination Enabled</p>
            </div> 

            <div className="w-full my-10">
                <h1 className="text-center text-xl pb-10 md:text-2xl lg:text-4xl lg:font-semibold">IMPACT STORIES</h1>

                <div className="w-4/5 m-auto md:flex md:justify-between md:gap-2">
                     <div className="w-full bg-[#1C7C9C] text-white p-2 my-6 rounded-md md:[45%]">
                        <img src="images/initiative/vaxnow/impact-stories-1.png" alt="impact story" className="lg:w-full"/>
                        <h1 className="font-bold text-lg xl:text-2xl">VACCINATION4EVERYONE: Enabling Ease of Vaccine Access for Trans People</h1>
                        <h5 className="my-4 text-sm">23 may 2020</h5>
                     </div>

                     <div className="w-full bg-[#1C7C9C] text-white p-2 my-6 rounded-md md:[45%]">
                        <img src="images/initiative/vaxnow/impact-stories-2.png" alt="impact story" className="lg:w-full" />
                        <h1 className="font-bold text-lg xl:text-2xl">Vaccination Playbook:things you need to know to...</h1>
                        <h5 className="my-4 text-sm">23 may 2020</h5>
                    </div>

                </div>
            </div> 

            <div className="w-full lg:w-4/5 lg:m-auto"> 
                <h1 className="text-center font-bold my-10 xl:text-3xl">JOIN CAC</h1>
                <div className="w-full flex flex-col md:flex-row md:justify-between">
                    <div className="w-full md:w-4/5 p-2">
                        <p className="font-semibold xl:text-xl">By enrolling you can contribute to and benefit from this collaboration. Also, do encourage other organisations and experts to join hands with us. The key benefits of being part of the collaborative is access to people, resources, financing & partnerships and the ability to make a greater collective impact.</p>
                    </div>
                    <div className="w-full md:w-1/5 text-center md:my-10">
                        <button className="bg-[#1C7C9C] text-white border-2 border-white rounded-md p-2 px-5 xl:text-xl">SIGNUP NOW</button>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row  md:justify-between bg-[#e8eadc] mt-5 mb-20"> 
                    <div className="w-full md:w-4/5 p-2">
                        <p className="xl:text-xl">COVIDActionCollab is not merely an aggregation of partners, but is an aggregation of capacities, through which we have developed key high impact initiatives. We have drawn upon our one year’s experience at CAC and engagement with our large constituency of partners to put together a menu of initiatives for funders/investors to support which will save lives and livelihoods, and enable vulnerable communities to 'bounce forward’. Support these initiatives to build resilient communities</p>
                    </div>
                    <div className="w-full md:w-1/5 text-center pb-5 md:my-10">
                        <button className="bg-[#8e9a50] text-white rounded-md p-2 px-5 xl:text-xl">DONATE NOW</button>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}
export default VaxNow