import React from "react"

const Header = () => {


    return (
        <div className="block lg:flex items-center">
            <div className="block w-full space-y-5 ">
                <p className="font-light uppercase text-white lg:text-left text-center" data-aos="fade-up">
                    <span className="bg-[#22274A] w-fit rounded-lg px-2">I build professional, efficient, and scalable web solutions. </span>
                </p>

                <h1 className="lg:text-6xl text-4xl lg:text-left text-center font-bold text-white" data-aos="fade-up">
                    <span className="text-[#27ce80]">Beautifully designed, </span>
                    <span className="text-white ">technically sound, built to perform.</span>
                </h1>


                <p className="text-xl text-white lg:text-left text-center" data-aos="fade-up">
                    I specialize in developing robust platforms, including cab booking systems, e-commerce websites, and custom business applications. My focus is on writing clean code, optimizing performance, and delivering results-driven web development.
                </p>

                <p className="block lg:flex items-center gap-4 ">
                    <a role="button" className="block w-full mb-3 bg-[#27ce80] hover:opacity-80 text-black font-semibold rounded-lg px-6 py-3 transition-all duration-300 ease-in-out" data-aos="fade-up">Bring Your Ideas to Life</a>
                    <a href="./contact" className="drop-shadow-[0_0_10px_#3CAAFB] block w-full mb-3 bg-[#22274A50] hover:opacity-80 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300 ease-in-out" data-aos="fade-up">Get a Free Quote</a>
                </p>

                <div className="block lg:flex items-center gap-4">
                    <div className=" drop-shadow-[0_0_10px_#3CAAFB] block w-full mb-3" data-aos="fade-up">
                        <div className="w-full space-y-1 rounded-lg bg-[#22274A50] px-6 py-4 text-light-200">
                            <p className="text-xl font-semibold">Trusted by 20+ Companies ⭐⭐⭐⭐⭐</p>
                            <p>Delivering innovative tech solutions with proven success</p>
                        </div>
                    </div>

                    <div className="block w-full mb-3" data-aos="fade-up">
                        <div className="w-full space-y-1 rounded-lg bg-[#27ce8050] px-6 py-4 text-light-200">
                            <p className="space-x-2 text-xl font-semibold flex items-center gap-2">
                                <span className="font-bold w-6 h-6 bg-white text-black rounded px-2 flex items-center justify-center">🌍</span> 5K+ Users Impacted
                            </p>
                            <p>Building seamless digital experiences for diverse audiences</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="hidden lg:flex justify-end w-full bg-whites" data-aos="flip-left">
                <img src="./assets/images/mywebimage.webp" alt="" className="w-[90%]" />
            </div>
        </div>
    )
}

export default Header