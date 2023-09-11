const Communities=()=>{
    return(
        <>
        <div className="w-full">
            <div className="w-full flex flex-col md:flex-row md:justify-between">
                <div className="w-full bg-[#1C7C9C] opacity-[1] md:w-1/2">
                    <img src="images/home/home-partner.png" alt="Partners" className="w-full h-full" />
                </div>
                <div className="w-full p-3 bg-[#1C7C9C] text-white md:w-1/2 lg:p-8">
                    <h1 className="text-2xl font-semibold lg:text-5xl">Partner With Us</h1>
                    <h3 className="my-3 text-xl lg:text-2xl">We’re looking to partner with:</h3>

                    <p className="my-3 lg:text-xl">Implementing Organisations: NGOs, CBOs and Government bodies working at a grassroots level.</p>
                    <p className="my-3 lg:text-xl">Providers: Organisations with resources such as HR, technology, materials, finance, etc.</p>
                    <p className="my-3 lg:text-xl">Enablers: Industry Associations, Policy Think Tanks and Academia. Join our pan-India collaborative that contributes to building resilience among vulnerable communities.</p>

                    <button className='rounded-full my-4 p-4 px-9 bg-[#1C7C9C] text-white border-2 border-white lg:text-xl'>Join Us</button>
                </div>
            </div>

            <div className="w-full flex flex-col justify-between md:flex-row ">
                <div className="w-full md:w-1/2 bg-[#FDD800] p-3 lg:p-8">
                    <h1 className="text-3xl py-6 lg:text-6xl">Volunteer With Us</h1>
                    <p className="my-5 lg:text-xl">We invite stellar, driven and passionate volunteers who’d like to contribute to resilience building within vulnerable communities.</p>

                    <p className="my-4 lg:text-xl">WRITE TO US AT</p>
                    <p className="underline my-3 mb-12 lg:text-xl">COMMUNITYACTIONCOLLAB@CATALYSTS.ORG</p>
                </div>

                <div className="w-full md:w-1/2  bg-[#FDD800] opacity-[0.8]">
                    <img src="images/home/home-volunteer.png" alt="Volunteer" className="w-full h-full"/>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row md:justify-between">
                <div className="w-full bg-[#383838] opacity-[0.8] md:w-1/2">
                    <img src="images/home/home-community.png" alt="" className="w-full h-full"/>
                </div>
                <div className="w-full  bg-[#383838] text-white md:w-1/2 p-3 lg:p-8">  
                    <h1 className="text-3xl md:text-5xl  py-8 lg:text-7xl">Invest In Community Action Collab</h1>

                    <p className="my-4 lg:text-xl">The CAC is not merely an aggregation of partners but an aggregation of capacities, through which we have developed key high-impact initiatives. We have drawn upon our experience of engagement with our large constituency of partners to put together a menu of initiatives for funders/investors to support that will save lives and livelihoods and enable vulnerable communities to ‘bounce forward’.</p>

                    <button className="rounded-lg bg-[#383838] text-white border-2 border-white py-3 px-12 my-5 lg:text-xl">Find Out More</button>

                </div>
            </div>
        </div>
        </>
    )
}
export default Communities