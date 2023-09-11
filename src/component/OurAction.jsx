const OurAction=()=>{
    return(
        <>
        <div className="md:flex ">
                <div className="w-full bg-[#3691c0] text-white p-3 md:w-1/4 md:text-center xl:h-[70vh] md:h-[80vh]">
                    <div className="flex gap-8 md:flex-wrap">
                        <img src="images/action/orchestrate.png" alt="orchestrate" className="w-20 h-20 md:m-auto" />
                        <h1 className="text-2xl mt-6 font-semibold md:w-full xl:text-4xl">Orchestrate</h1>
                    </div>
                    <p className="w-4/5 mt-4 mb-12 m-auto lg:text-xl xl:text-2xl">Functional governance systems causing dynamic network effects, with nodes to actively address the needs of the vulnerable and enable human capital for emergency response.</p>
                </div>
                <div className="hidden md:block md:w-[12.5%]  h-full">
                    <img src="images/action/cross-bg-1.jpg" alt="" className="w-full h-[100vh] xl:h-[70vh] md:h-[80vh]"/>
                </div>
                <div className="w-full bg-[#FDD800] p-3 md:w-1/4 md:text-center xl:h-[70vh]">
                    <div className="flex gap-8 md:flex-wrap">
                        <img src="images/action/influence.png" alt="influence" className="w-20 h-20 md:m-auto" />
                        <h1 className="text-2xl mt-6 font-semibold md:w-full xl:text-4xl">Influence</h1>
                    </div>
                    <p className="w-4/5 mt-4 mb-12 m-auto lg:text-xl xl:text-2xl">Significant policy and practice changes. Amplify components/issues through global collaboration.</p>
                </div>
                <div className="hidden md:block md:w-[12.5%] h-full">
                <img src="images/action/cross-bg-2.jpg" alt="" className="w-full h-[100vh] xl:h-[70vh] md:h-[80vh]"/>
                </div>
                <div className="w-full  bg-[#272727] p-3 text-white md:w-1/4 md:text-center xl:h-[70vh] md:h-[80vh]" >
                    <div className="flex gap-8 md:flex-wrap ">
                        <img src="images/action/solve.png" alt="solve" className="w-24 h-24 md:m-auto md:w-32 md:h-32" />
                        <h1 className="text-2xl mt-8 font-semibold md:w-full xl:text-4xl">Solve</h1>
                    </div>
                    <p className="w-4/5 mt-4 mb-12 m-auto lg:text-2xl">Scalable solutions, response time and district-level integrated action.</p>
                </div>
            </div>
        </>
    )
}

export default OurAction