import React from "react"

const Experience = () => {


    return (

        <div className="block">
            <h2 className="text-3xl font-bold mb-8 pb-4">Professional Experience</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#3CAAFB] pl-6 relative">
                    <div class="absolute left-[-10px] top-2 w-4 h-4 bg-[#3CAAFB] rounded-full"></div>
                    <div>
                        <h3 class="text-xl font-semibold ">Full Stack Web Developer</h3>
                        <p class="text-sm text-[#3CAAFB]">Ichie ICT, Enugu</p>
                    </div>
                    <div class="text-sm text-gray-400 mt-2 md:mt-0">Jan 2025 – Present</div>
                </div>

                <div class="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#3CAAFB] pl-6 relative">
                    <div class="absolute left-[-10px] top-2 w-4 h-4 bg-[#3CAAFB] rounded-full"></div>
                    <div>
                        <h3 class="text-xl font-semibold ">Head of ICT Section</h3>
                        <p class="text-sm text-[#3CAAFB]">Man O' War Nigeria – National Headquarters, Abuja</p>
                    </div>
                    <div class="text-sm text-gray-400 mt-2 md:mt-0">Mar 2023 – Present</div>
                </div>

                <div class="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#3CAAFB] pl-6 relative">
                    <div class="absolute left-[-10px] top-2 w-4 h-4 bg-[#3CAAFB] rounded-full"></div>
                    <div>
                        <h3 class="text-xl font-semibold ">Web Developer</h3>
                        <p class="text-sm text-[#3CAAFB]">Man O' War Nigeria, Abuja</p>
                    </div>
                    <div class="text-sm text-gray-400 mt-2 md:mt-0">Mar 2022 – Feb 2023</div>
                </div>

                <div class="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#3CAAFB] pl-6 relative">
                    <div class="absolute left-[-10px] top-2 w-4 h-4 bg-[#3CAAFB] rounded-full"></div>
                    <div>
                        <h3 class="text-xl font-semibold ">Administrative Officer</h3>
                        <p class="text-sm text-[#3CAAFB]">Kings Guards Nigeria Ltd, Canaan Land Ota</p>
                    </div>
                    <div class="text-sm text-gray-400 mt-2 md:mt-0">Apr 2018 – Sep 2020</div>
                </div>

                <div class="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#3CAAFB] pl-6 relative">
                    <div class="absolute left-[-10px] top-2 w-4 h-4 bg-[#3CAAFB] rounded-full"></div>
                    <div>
                        <h3 class="text-xl font-semibold ">Freelance Web Developer</h3>
                        <p class="text-sm text-[#3CAAFB]">KJSG Cab Services, Ota, Ogun State</p>
                    </div>
                    <div class="text-sm text-gray-400 mt-2 md:mt-0">Sep 2024</div>
                </div>

                <div class="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#3CAAFB] pl-6 relative">
                    <div class="absolute left-[-10px] top-2 w-4 h-4 bg-[#3CAAFB] rounded-full"></div>
                    <div>
                        <h3 class="text-xl font-semibold ">Freelance Web Designer</h3>
                        <p class="text-sm text-[#3CAAFB]">Napec Marshal Corp, Ibadan</p>
                    </div>
                    <div class="text-sm text-gray-400 mt-2 md:mt-0">Mar 2024</div>
                </div>

                <div class="md:flex md:justify-between md:items-start gap-4 border-l-4 border-[#3CAAFB] pl-6 relative">
                    <div class="absolute left-[-10px] top-2 w-4 h-4 bg-[#3CAAFB] rounded-full"></div>
                    <div>
                        <h3 class="text-xl font-semibold ">Graphics Designer</h3>
                        <p class="text-sm text-[#3CAAFB]">Emjay Communication, Ota, Ogun State</p>
                    </div>
                    <div class="text-sm text-gray-400 mt-2 md:mt-0">2016 – 2017</div>
                </div>
            </div>



            <div className="block mt-10">
                <p className="text-lg font-semibold mb-4">Interested in collaborating or have questions?</p>
                <a href="/contact" className="drop-shadow-[0_0_10px_#3CAAFB] w-fit bg-[#3CAAFB] hover:opacity-80 text-black font-semibold rounded-lg px-6 py-2 transition-all duration-300 ease-in-out">Contact</a>
            </div>
        </div>
    )
}

export default Experience