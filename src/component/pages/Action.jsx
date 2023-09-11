import Footer from "../Footer";
import Navigation from "../Navigation";
import OurAction from "../OurAction";

const Action = () => {
    return (
        <>
            <Navigation />
            <div className="w-full h-[80vh] bg-[url('images/action/actions-bg.jpeg')] bg-center bg-cover bg-no-repeat relative">
                <img src="images/action/actions-bg.jpeg" alt="action page" className="absolute left-0 top-0 h-full"/>
                <div className="md:bg-gradient-to-r from-cyan-500 to-[#1C7C9C2B] opacity-[0.8] w-full h-full z-0 absolute top-0 left-0"></div>

                <div className="w-full bg-[#1C7C9C] text-white p-3 absolute left-0 bottom-0 md:w-2/5 md:bg-transparent md:left-12 md:top-28">
                    <p className="text-center my-6 lg:text-xl xl:text-2xl">Today, we understand that the impact of COVID-19 is long-term and will continue to affect vulnerable communities. Pandemics are here to stay, and there is an increasing likelihood that we will experience more pandemics in our lifetime. Yet, while for the world, the pandemic was a time of fear, hopelessness and uncertainty, for vulnerable people, the experience of these feelings is a constant. They live through shocks and disasters daily.</p>

                </div>
            </div>

            <div className="w-full p-5 lg:w-4/5 lg:m-auto">
                <h1 className="text-[#1C7C9C] font-semibold text-3xl py-5 p-4 lg:text-5xl">Our Approach</h1>
                <p className="my-4 lg:text-xl">The COVID-19 pandemic has enabled the Catalyst Group to build a strong and dynamic pan-India multidisciplinary network with a variety of expertise. This presents the potential to build the resilience of the vulnerable and their institutions in their everyday emergencies and to be ready for future humanitarian crises (climate & health). This has led to the #COVIDActionCollab transitioning to Community Action Collab, a ‘spring to action’ ready humanitarian emergency platform.</p>

                <p className="my-4 lg:text-xl">Our approach is born of the learning from #COVIDActionCollab is focused on orchestrating the responses of partners, solving difficult problems to find scalable solutions and influencing practice, policy and investments.</p>

                <p className="my-4 lg:text-xl">We deploy a three-pronged approach to support and enable vulnerable communities to survive and thrive amidst a crisis.</p>
            </div>

            <div className="lg:w-4/5 lg:m-auto">
            <OurAction/>
            </div>
            {/* key elements */}
            <div className="w-full lg:w-4/5 lg:m-auto ">

                <p className="px-3 my-6 lg:text-xl">The key elements we’re focusing on to operationalise this are:</p>

                <h1 className="text-2xl text-[#1C7C9C] px-3 font-semibold my-5 lg:text-5xl">Outcomes</h1>
                <div className="w-full md:w-4/5 md:m-auto md:flex md:justify-between lg:w-4/5">
                    <div className="w-full bg-[#FEF2A8] p-2 md:w-[32%] lg:w-[30%]">
                        <p className="my-6 lg:text-xl">Enable at least 10 million vulnerable people to experience resilience in their lives and livelihoods.</p></div>
                    <div className="w-full bg-[#FEF2A8] p-2 md:w-[32%] lg:w-[30%]">
                        <p className="my-6 lg:text-xl">Enable at least 100 vulnerable people-focused organisations to become resilient to future humanitarian tragedies.</p></div>
                    <div className="w-full bg-[#FEF2A8] p-2 md:w-[32%] lg:w-[30%]">
                        <p className="my-6 lg:text-xl">Create a ‘spring to action’ ready resourced platform available to respond to emergencies present in key vulnerable districts.</p></div>
                </div>

                <h1 className="text-2xl text-[#1C7C9C] px-3 my-5 font-semibold lg:text-5xl">Focus and Scale</h1>
                <p className="px-3 lg:text-xl">We place vulnerable people at the centre of the initiative. Its strategies and approach are geared towards attaining scale. Its action orientation is etched within what it will seek to do (orchestrate, solve and influence) and how (partner action platform, district-level initiatives and emergency response systems).</p>

                <h1 className="text-2xl text-[#1C7C9C] px-3 my-5 font-semibold xl:text-4xl">Our Unique Approach</h1>
                <p className="px-3 lg:text-xl">As an orchestrator, we will support the development of nodes of geographical, domain and vulnerable population profiles. Each node would be a cluster of partners, driven by an anchor partner. The node would identify and implement an agenda with respect to the resilience of vulnerable populations in their geographies, with respect to a domain or a vulnerability profile. Through the orchestration, the entire system of nodes will be supported to enable a network effect as a force multiplier. A technology backbone will enable optimal network engagements.</p>

                <h1 className="text-2xl text-[#1C7C9C] px-3 my-5 font-semibold xl:text-4xl">Decentralisation and Localisation</h1>
                <p className="px-3 lg:text-xl">An integrated district approach for resilience building and disaster preparation will be undertaken for districts selected based on vulnerability assessment and partner availability. This approach would include SDG planning at the district level, scaleable models and initiatives, as well as response plans with the government for disaster management. Localisation will also give a fillip to resilience, which will get comprehensively addressed through building individual as well as collective agency.</p>

                <h1 className="text-2xl text-[#1C7C9C] px-3 my-5 font-semibold xl:text-4xl">Management Architecture</h1>
                <p className="px-3 lg:text-xl mb-12">The backbone of the Community Action Collab is a Secretariat that will help in developing the collaborative platform, maintaining partner nodes, facilitating an impact canvas for problem-solving, designing resilience-building initiatives at the district level and performing other enabler functions for the collaborative like technology, communications, monitoring and evaluation, policy advocacy and governance.</p>
            </div>

            <Footer />
        </>
    );
};
export default Action;