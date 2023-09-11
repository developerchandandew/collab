import Footer from "../Footer";
import Navigation from "../Navigation";
import Form from "../Form";

const Shilp=()=>{
    return(
        <>
        <Navigation className='z-10'/>

        <div className="w-full h-[90vh] bg-[url('images/initiative/ship/banner_shilp.png')] bg-cover bg-no-repeat z-10 relative">
        <div className="md:bg-gradient-to-r from-cyan-500 to-[#1C7C9C2B] opacity-[0.8] w-full h-full  absolute top-0 left-0"></div>

            <div className="w-full bg-[#1C7C9C] text-white absolute bottom-0 left-0 py-6 text-center md:w-2/5 md:bg-transparent md:top-56 md:text-left md:left-20  ">
                <h1 className="pb-6 text-xl md:text-3xl lg:text-6xl">SHILP Resource Hub</h1>

                <button className="text-white bg-[#1C7C9C] border-2 border-white rounded-md p-3 ">KNOW MORE</button>
            </div>
        </div>

        <div className="w-full md:flex md:justify-between ">
            <div className="w-full md:w-1/5">
                <img src="images/initiative/ship/ship-about.png" alt="Samudra Sanstha" className="m-auto my-6" />
            </div>
            <div className="w-full p-3 md:w-4/5">
                <h1 className="text-[#1C7C9C] text-2xl font-semibold py-3 xl:text-4xl">About SHILP</h1>
                <p className="my-5 xl:text-2xl"><strong>SHILP</strong> is an initiative by Community Action Collab, in partnership with the MacArthur Foundation, to build the resilience of the leaders of Community Organisations (COs) who work with vulnerable communities. Through this initiative, we aim to cover community organisations across the country which cater to diverse communities, including female and male sex workers, people living with HIV, farmers, artisans, and members of the tribal community by:</p>

                <div className="w-full md:flex md:justify-between">
                    <div className="border-2 border-gray-400 p-2 rounded-md my-4 md:w-[30%]">
                        <img src="images/initiative/ship/bird.jpg" alt="collab" className="w-20 h-20 md:m-auto"/>
                        <p className="text-[#1C7C9C] text-lg my-6 xl:text-xl">Building hope and capacities among CO leaders and key executives and helping to develop their business plans to manage and tide through tough times effectively</p>
                    </div>

                    <div className="border-2 border-gray-400 rounded-md my-4 p-2 md:w-[30%]">
                        <img src="images/initiative/ship/meeting.png" alt="collab" className="w-20 h-20 md:m-auto"/>
                        <p className="text-[#1C7C9C] text-lg my-6 xl:text-xl">Meeting the immediate critical financial needs of COs to ensure their continuity in their journey towards resilience.</p>
                    </div>

                    <div className="border-2 border-gray-400 rounded-md my-4 p-2 md:w-[30%]">
                        <img src="images/initiative/ship/network.jpg" alt="collab" className="w-20 h-20 md:m-auto"/>
                        <p className="text-[#1C7C9C] text-lg my-6 xl:text-xl">Enabling access of COs to a platform to network, learn and leverage opportunities from peers, resource agencies, policymakers, and investors and serve their members better and advocate for change.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full p-2">
            <h1 className="text-[#1C7C9C] py-5 text-xl font-semibold xl:text-3xl lg:px-8">Under SHILP, we build resilience among CO leaders and their organisations through the following:</h1>

            <div className="w-full md:flex md:justify-between md:flex-wrap lg:w-4/5 lg:m-auto">
                <div className="flex justify-between my-4 border-b-8 bb md:w-[30%]">
                    <div className="bg-[#86bbda] w-1/5 flex justify-center items-center">
                        <img src="images/initiative/ship/build1.png" alt="build" />
                    </div>
                    <div className="bg-[#d8e9f1] w-4/5 p-2 lg:p-5">
                        <p className="lg:text-2xl">Baseline exercises – to help each organisation assess where they are today and take stock of their strategic and operational capacities</p>
                    </div>
                </div>

                <div className="flex justify-between my-4 border-b-8 bb md:w-[30%]">
                    <div className="bg-[#86bbda] w-1/5 flex justify-center items-center">
                        <img src="images/initiative/ship/build2.png" alt="build" />
                    </div>
                    <div className="bg-[#d8e9f1] w-4/5 p-2 lg:p-5">
                        <p className="lg:text-2xl">Business planning or work planning exercise – to help them create their strategy and operating plan</p>
                    </div>
                </div>

                <div className="flex justify-between my-4 border-b-8 bb md:w-[30%]" >
                    <div className="bg-[#86bbda] w-1/5 flex justify-center items-center">
                        <img src="images/initiative/ship/build3.png" alt="build" />
                    </div>
                    <div className="bg-[#d8e9f1] w-4/5 p-2 lg:p-5">
                        <p className="lg:text-2xl">Capacity building modules on leadership and the role of board members</p>
                    </div>
                </div>

                <div className="flex justify-between my-4 border-b-8 bb md:w-[30%]">
                    <div className="bg-[#86bbda] w-1/5 flex justify-center items-center">
                        <img src="images/initiative/ship/build4.png" alt="build" />
                    </div>
                    <div className="bg-[#d8e9f1] w-4/5 p-2 lg:p-5">
                        <p className="lg:text-2xl">Peer exchange sessions – to enable cross-learning and cross-pollination of ideas and to build a long-lasting system of peer support</p>
                    </div>
                </div>

                <div className="flex justify-between my-4 border-b-8 bb md:w-[30%]">
                    <div className="bg-[#86bbda] w-1/5 flex justify-center items-center">
                        <img src="images/initiative/ship/build5.png" alt="build" />
                    </div>
                    <div className="bg-[#d8e9f1] w-4/5 p-2 lg:p-5">
                        <p className="lg:text-2xl">Creating an opportunity to network and engage with other organisations and leaders of the programme</p>
                    </div>
                </div>

                <div className="flex justify-between my-4 border-b-8 bb md:w-[30%]">
                    <div className="bg-[#86bbda] w-1/5 flex justify-center items-center">
                        <img src="images/initiative/ship/build6.png" alt="build" />
                    </div>
                    <div className="bg-[#d8e9f1] w-4/5 p-2 lg:p-5">
                        <p className="lg:text-2xl">Providing access to resources – technical, functional, and financial, to help build sustainable operations and organisations</p>
                    </div>
                </div>
            </div>
        </div>  

        <div className="w-full md:flex md:justify-between my-12">
            <div className="md:w-1/2">
                <img src="images/initiative/ship/ship-resource.png" alt="resource" className="md:w-full md:h-full"/>
            </div>
            <div className="bg-black p-3 text-white text-center md:w-1/2">
                <h1 className="text-xl my-5 text-left lg:text-6xl">SHILP Resource Hub</h1>
                <p className="my-4 text-left lg:text-xl">SHILP works with community organisations of vulnerable populations and their leaders, to build individual and institutional resilience for the future.</p>
                <p className="my-4 text-left lg:text-xl">In order to fulfil the ongoing information and knowledge requirements and needs of the organisations, the Resource Hub is an online repository – ‘ready-to-use’ information and knowledge artefacts, that you will find useful, as you strengthen your organisations and your leadership teams.</p>
                <p className="my-4 text-left lg:text-xl">The resource hub consists of self help resources such as tools, articles, frameworks, guidelines, etc., that you can access and share with others too.</p>
                <p className="my-4 text-left lg:text-xl">The resources that you will find here are a collection of created and curated artefacts from within and outside the Catalyst Group of companies.</p>

                <button className="bg-black border-2 border-white p-4 px-8 font-semibold rounded-full my-5 lg:text-2xl">KNOW MORE</button>
            </div>
        </div>    

        <div className="p-2 pb-12">
            <h1 className="text-[#1C7C9C] font-semibold lg:text-4xl">Contact Us</h1>
            <p className="my-4 lg:text-xl mb-6">To learn more about the initiative or join us, fill this form.</p>

            <Form/>
        </div>

            
        <Footer/>
        
        </>
    )
}
export default Shilp