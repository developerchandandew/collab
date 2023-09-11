import emailjs from '@emailjs/browser';

const Form=()=>{
    const submitHandle=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_upuf2su','template_obje1im',e.target,'zTymq1M0_hJIY-eVP').then((res)=>{
            console.log(res)
        }).catch((rej)=>{
            console.log(rej)
        });
        console.log('sucess');
    }
    return(
        <>
         <form className="w-4/5 m-auto bg-[#E8F2F5] rounded-md p-4  flex flex-wrap justify-between md:left-20 lg:left-28  xl:w-[90%]" onSubmit={submitHandle}>
                    <div className="my-2 w-full md:w-[30%]">
                        <label htmlFor="" className="text-[#1C7C9C] mb-2 lg:text-xl">FullName</label>
                        <input type="text" name='fullname' placeholder="" required className="p-2 rounded-md outline-none w-full md:my-1"/>
                    </div>

                    <div className="my-2 md:w-[30%] w-full">
                        <label htmlFor="" className="text-[#1C7C9C] mb-2 block lg:text-xl">Mobile No.</label>
                        <input type="text" name='Mobileno' placeholder="" required className="p-2 rounded-md outline-none w-full md:-mt-1"/>
                    </div>

                    <div className="my-2 w-full md:w-[30%]">
                        <label htmlFor="" className="text-[#1C7C9C] mb-2 lg:text-xl">Email ID</label>
                        <input type="text" name='email' placeholder="" required className="p-2 rounded-md outline-none w-full md:my-1"/>
                    </div>

                    <div className="my-2 w-full">
                        <label htmlFor="" className="text-[#1C7C9C] mb-2 block lg:text-xl">Message</label>
                        <textarea name="message" required className="outline-none w-full rounded-md h-24 p-2"></textarea>
                    </div>

                    <div className="bg-white  w-full my-3 flex justify-between text-black p-2 rounded-md border-2 border-gray-400 md:w-1/2 lg:w-2/5 ">
                        <label className="p-2 my-3">
                        <input type="checkbox" required className="w-6 h-6" />
                        <span className="ml-2  ">I am not robot</span>
                        </label>
                        <div >
                            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" className="w-8 h-8 mx-8 mt-2"/>
                            <p className="text-center text-xs">reCAPTCHA</p>
                            <p className="text-center text-xs">Privacy - terms</p>
                        </div>
                    </div>

                    <div className="w-full">

                    <button className="bg-[#1C7C9C] text-white w-full p-3 rounded-md lg:w-[20%] xl:w-[10%] lg:text-xl lg:my-6" >Send Message</button>
                    </div>
                </form>
        </>
    )
}
export default Form