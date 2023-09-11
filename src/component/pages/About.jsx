import Footer from "../Footer";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import data from "../../database/data";
const About = () => {
    
    return (
        <>
            <Navigation />

            <div className="w-full h-[100vh] bg-[url('images/about/main-bg.jpeg')] bg-cover bg-no-repeat relative">
                <img src="images/about/main-bg.jpeg" alt="about page" className="absolute top-0 left-0 h-full" />
            <div className="md:bg-gradient-to-r from-cyan-500 to-[#1C7C9C2B] opacity-[0.8] w-full h-full z-auto absolute top-0 left-0"></div>
                <div className="w-full bg-[#1C7C9C] text-white absolute bottom-0 left-0 md:bg-transparent md:top-36 md:w-3/5 lg:w-2/5 lg:top-48">
                    <p className="text-center p-3 pt-6 lg:text-2xl">Community Action Collab (CAC) is a dynamic humanitarian emergency platform that builds the resilience of Vulnerable People and their institutions in their everyday emergencies and is ready for future humanitarian crises (climate & health). The platform orchestrates and influences the actions and decisions of 360 partners, governments and other alliances, enabling them to solve issues affecting the vulnerable and ensuring access to critical livelihood, health, social protection and climate impact solutions.</p>


                </div>

            </div>

            <div className="w-full p-5 bg-[#1C7C9C] text-[#1C7C9C] sticky top-0">
                <select className="w-3/5 p-3 rounded-md ml-16 md:ml-44 md:w-2/5 lg:ml-64 xl:ml-[460px]">
                    <option value="section">IN THIS SECTION</option>
                    <option value="mission"><Link to='#mission'> OUR MISSION</Link></option>
                    <option value="partner"> <Link to='#partner'>OUR PARTNER</Link></option>
                    <option value="goverence"> <Link to='#goverence'>GOVERENCE</Link></option>
                </select>
            </div>

            <div className="w-full p-3 lg:w-4/5 lg:m-auto">

                <h1 className="text-[#1C7C9C] my-6 font-semibold text-2xl  lg:text-5xl ">Our Vision</h1>
                <p className="lg:text-xl">A world that is resilient and invigorated. (Empowering the key vulnerable communities to survive and thrive during humanitarian crises)</p>

                <h1 className="text-[#1C7C9C] my-6 font-semibold text-2xl lg:text-5xl" id="mission">Our Mission</h1>
                <p className="lg:text-xl">The Collaborative is incubated by the Catalyst Group, a social impact platform with 26 years experience of working across 30 countries in social and economic development, including humanitarian emergencies.</p>

                <div className="w-full md:flex md:justify-between md:my-6">
                    <div className="border-2 border-gray-300 w-full rounded-md my-4 md:w-[30%]">
                        <img src="images/about/synergy.png" alt="synergize" className="w-20 mt-4 ml-4" />
                        <p className="px-2 text-lg my-4 lg:text-3xl text-[#1C7C9C]">Synergise resource access and allocate efforts, in an adaptive and urgent manner</p>
                    </div>
                    <div className="border-2 border-gray-300 w-full rounded-md my-4 md:w-[30%]">
                        <img src="images/about/Augment_collaboration.png" alt="augment collab" className="w-12 ml-8 mt-4" />
                        <p className="px-2 text-lg my-4 lg:text-3xl text-[#1C7C9C]">Augment collaboration and connections, within the larger network, at multiple levels</p>
                    </div>
                    <div className="border-2 border-gray-300 w-full rounded-md my-4 md:w-[30%]">
                        <img src="images/about/accelerate.png" alt="accelerate" className="w-32" />
                        <p className="px-2 text-lg my-4 lg:text-3xl text-[#1C7C9C]">Accelerate transformative impact in keeping with the changing needs within vulnerable communities</p>
                    </div>
                </div>


                <h1 className="text-[#1C7C9C] my-6 font-semibold text-2xl lg:text-5xl" id="partner">Our Partners</h1>
                <p className="my-5 lg:text-xl">We believe that resilient communities are better able to prepare, adapt and get stronger in response to internal and external pressures and stresses in a way that not only allows them to maintain essential functions and bounce back quickly but also goes further toward an improved environment, social and economic health and wellbeing.</p>

                <p className="my-5 lg:text-xl">This kind of resilience can only be built through constant human collaboration, where looking out for and after each other becomes a way of life.</p>

                <p className="my-5 lg:text-xl">Our network of partners ranges from Implementers (NGOs, CBOs, Government bodies and Private Sector Organisations); Providers (Human Resources, Finance and Technology) & Enablers (Policy, Academia and Industry Associations).</p>


                <h1 className="text-[#1C7C9C] my-6 font-semibold text-2xl lg:text-5xl" id="goverence">Governance</h1>
                <p className='my-5 lg:text-xl'>A Governing Council of eminent individuals with rich experience from diverse backgrounds and expertise guides and steers the efforts of the collaborative.</p>

                <p className='my-5 lg:text-xl'>It meets weekly to help in defining and evolving principles, policies, partnerships, programmes/actions, resourcing and reviewing for the Collaborative; and ensuring that key decision-makers in the government, private, civil society and communities are closely engaged with and their perspective is included for collective action.</p>

                <p className='my-5 lg:text-xl'>Our Governing Council brings in a wealth of learning from the areas of health, livelihoods, disaster management, food supplies, bureaucracy, academia, technology and donors.</p>


                <div className="w-full py-20 md:w-4/5 md:m-auto md:flex md:justify-between md:flex-wrap md:gap-4 lg:w-full">
                    {data.map(item=> 
                    <div className="w-3/5 p-3 m-auto my-4 md:w-2/5 md:m-0 lg:w-1/5" key={item.id} >
                        <img src={item.img} alt="arvind" className="rounded-md" />
                        <h1 className="text-[#1C7C9C] px-2 lg:text-3xl my-3">{item.name}</h1>
                        <p className="text-sm px-2 my-4 lg:text-xl">{item.position}</p>
                    </div>
                    )}
                </div>

            </div>


            <Footer />
        </>

    );
};
export default About;