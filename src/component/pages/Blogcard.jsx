import { FaAngleRight, FaTelegram, FaWhatsapp, FaLinkedin, FaTwitter,FaArrowLeft } from "react-icons/fa6";
import { HiArrowLeft} from "react-icons/hi";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
const Blogcard = () => {
    return (
        <>
            <Navigation />
            <div className="w-full bg-gradient-to-r from-[#1C7C9CF0] to-[#FD9C00E0] p-3 text-white">

                <h1 className="flex gap-3 xl:text-xl xl:my-6">Impact Stories <FaAngleRight className="mt-1"/></h1>

                <h1 className="my-6 text-xl font-semibold lg:mb-16 xl:text-2xl">From Advocacy to Action: Sai’s Efforts in Empowering Vulnerable Women</h1>
            </div>

            <div className="w-full bg-[#dfdfdf] md:flex md:justify-between ">
                <div className="hidden md:block md:1/5 xl:w-1/4">
                    <Link to ='/impact'>
                    <div className="border-2 border-[#1C7C9CF0] rounded-full m-4 p-2 w-fit xl:ml-32 xl:p-4">
                    <HiArrowLeft className="mx-15 text-2xl text-[#1C7C9CF0]"/>
                    </div></Link>
                </div>
                <div className="w-full md:w-3/5 bg-white mb-5 xl:w-1/2">
                    <img src="src/images/impact/comm-1.png" alt="articles" className="w-full" />

                    <div className="p-4">
                        <p className="my-4 text-justify xl:text-xl">Sai is a Social Protection facilitator who is working with Head Held High (HHH) Foundation, a partner of Community Action Collab. Together they have been working with communities in Hyderabad to create awareness around government schemes which can further their lives. As a social protection facilitator, one of Sai’s main tasks is to regularly visit the local community centre to assist candidates applying for these schemes. During one of his visits, he noticed that a number of women who had recently completed their General Education and Training (GET) programme – a programme facilitated by HHH that prepares individuals to set up/upgrade their own businesses – were interested in applying for the PM Sewing Machine Scheme.</p>

                        <p className="my-4 text-justify xl:text-xl">The PM Sewing Machine Scheme, initiated by the central government, aimed to provide sewing machines to women, free of cost. The primary objective of the scheme is to enable women to start their own tailoring businesses.</p>

                        <p className="my-4 text-justify xl:text-xl">“All the women present there were happy to know that the scheme could support them financially and they could start earning an alternate livelihood soon,” Sai shared. His support extended towards assisting with obtaining essential documents such as Aadhar cards, income certificates, and sometimes widow certificates as well. Sai collected the filled-out applications and submitted them to the concerned department. After much follow-up and regular contact with the department, the applications had been processed and the sewing machines were ready for distribution.</p>.

                        <p className="my-4 text-justify xl:text-xl">Sai is one of the many social protection facilitators that work tirelessly to assist the last mile in accessing their basic rights. Social protection facilitators like Sai play an instrumental role in ensuring that vulnerable people gain access to social security schemes, enabling them to become resilient and #BounceForward.</p>
                    </div>
                </div>
                <div className="w-full pb-12 md:w-1/5 xl:w-1/4">
                    <div className="w-fit bg-white text-[#1c7c9c] p-4 flex gap-4 rounded-full m-auto md:hidden md:my-6">
                    <FaTelegram /><FaWhatsapp /><FaLinkedin /><FaTwitter />
                    </div>

                    <div className="hidden md:block w-fit bg-white text-[#1c7c9c] p-2 mt-4 rounded-full xl:mx-6 xl:p-5">
                    <FaTwitter className="my-2 xl:text-2xl xl:my-4"/><FaLinkedin  className="my-2 xl:text-2xl xl:my-4"/><FaTelegram className="my-2 xl:text-2xl xl:my-4"/><FaWhatsapp className="my-2 xl:text-2xl xl:my-4"/>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};
export default Blogcard;