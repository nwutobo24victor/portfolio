import React from "react"

const Experience = () => {


    return (

        <div className="block">
            <h2 className="text-3xl font-bold mb-8 pb-4">Professional Experience</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#27ce80] pl-6 relative">
                    <div className="absolute left-[-10px] top-2 w-4 h-4 bg-[#27ce80] rounded-full"></div>
                    <div>
                        <h3 className="text-xl font-semibold ">Full Stack Web Developer</h3>
                        <p className="text-sm text-[#27ce80]">Ichie ICT, Enugu</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">April 2025 – Present</div>
                </div>

                 <div className="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#27ce80] pl-6 relative">
                    <div className="absolute left-[-10px] top-2 w-4 h-4 bg-[#27ce80] rounded-full"></div>
                    <div>
                        <h3 className="text-xl font-semibold ">Front End Web Developer</h3>
                        <p className="text-sm text-[#27ce80]">Ichie ICT, Enugu</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">Jan 2025 – Present</div>
                </div>

                <div className="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#27ce80] pl-6 relative">
                    <div className="absolute left-[-10px] top-2 w-4 h-4 bg-[#27ce80] rounded-full"></div>
                    <div>
                        <h3 className="text-xl font-semibold ">Head of ICT Section</h3>
                        <p className="text-sm text-[#27ce80]">Man O' War Nigeria – National Headquarters, Abuja</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">Mar 2023 – Present</div>
                </div>

                <div className="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#27ce80] pl-6 relative">
                    <div className="absolute left-[-10px] top-2 w-4 h-4 bg-[#27ce80] rounded-full"></div>
                    <div>
                        <h3 className="text-xl font-semibold ">Web Developer</h3>
                        <p className="text-sm text-[#27ce80]">Man O' War Nigeria, Abuja</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">Mar 2022 – Feb 2023</div>
                </div>

                <div className="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#27ce80] pl-6 relative">
                    <div className="absolute left-[-10px] top-2 w-4 h-4 bg-[#27ce80] rounded-full"></div>
                    <div>
                        <h3 className="text-xl font-semibold ">Administrative Officer</h3>
                        <p className="text-sm text-[#27ce80]">Kings Guards Nigeria Ltd, Canaan Land Ota</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">Apr 2018 – Sep 2020</div>
                </div>

                <div className="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#27ce80] pl-6 relative">
                    <div className="absolute left-[-10px] top-2 w-4 h-4 bg-[#27ce80] rounded-full"></div>
                    <div>
                        <h3 className="text-xl font-semibold ">Freelance Web Developer</h3>
                        <p className="text-sm text-[#27ce80]">KJSG Cab Services, Ota, Ogun State</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">Sep 2024</div>
                </div>

                <div className="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#27ce80] pl-6 relative">
                    <div className="absolute left-[-10px] top-2 w-4 h-4 bg-[#27ce80] rounded-full"></div>
                    <div>
                        <h3 className="text-xl font-semibold ">Freelance Web Designer</h3>
                        <p className="text-sm text-[#27ce80]">Napec Marshal Corp, Ibadan</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">Mar 2024</div>
                </div>

                <div className="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#27ce80] pl-6 relative">
                    <div className="absolute left-[-10px] top-2 w-4 h-4 bg-[#27ce80] rounded-full"></div>
                    <div>
                        <h3 className="text-xl font-semibold ">Graphics Designer</h3>
                        <p className="text-sm text-[#27ce80]">Emjay Communication, Ota, Ogun State</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">2016 – 2017</div>
                </div>
            </div>



            <div className="block mt-10">
                <p className="text-lg font-semibold mb-4">Interested in collaborating or have questions?</p>
                <a href="/contact" className="w-fit bg-[#27ce80] hover:opacity-80 text-black font-semibold rounded-lg px-6 py-2 transition-all duration-300 ease-in-out flex gap-1 items-center">Contact
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Arrow-right SVG Icon</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m-7-7l7 7l-7 7" /></svg>
                </a>
            </div>
        </div>
    )
}

export default Experience