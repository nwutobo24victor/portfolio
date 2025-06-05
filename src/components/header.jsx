import React from "react"

const Header = () => {


    return (
        <div className="block lg:flex items-center">
            <div className="block w-full space-y-5 ">
                <p className="font-light uppercase text-white lg:text-left text-center" data-aos="fade-up">
                    <span className="bg-[#22274A] w-fit rounded-lg px-2">I build professional, efficient, and scalable web solutions. </span>
                </p>

                <h1 className="lg:text-6xl text-4xl lg:text-left text-center font-bold text-white" data-aos="fade-up">
                    Beautifully <span className="text-[#3CAAFB]"> designed,</span> & efficient
                    <span className="text-[#3CAAFB] lg:block"> Technically sound. </span>
                    <span className="lg:block">Built to perform</span>
                </h1>

                <p className="text-xl text-white lg:text-left text-center" data-aos="fade-up">
                    I specialize in developing robust platforms, including cab booking systems, e-commerce websites, and custom business applications. My focus is on writing clean code, optimizing performance, and delivering results-driven web development.
                </p>

                <p className="block lg:flex items-center gap-4 ">
                    <a role="button" className="block w-full mb-3 bg-[#3CAAFB] hover:opacity-80 text-black font-semibold rounded-lg px-6 py-3 transition-all duration-300 ease-in-out" data-aos="fade-up">Bring Your Ideas to Life</a>
                    <a href="./contact" className="block w-full mb-3 bg-[#22274A] hover:opacity-80 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300 ease-in-out" data-aos="fade-up">Get a Free Quote</a>
                </p>

                <div className="block lg:flex items-center gap-4">
                    <div className="block w-full mb-3" data-aos="fade-up">
                        <div className="w-full space-y-1 rounded-lg bg-[#22274A50] px-6 py-4 text-light-200">
                            <p>Excellent ⭐⭐⭐⭐⭐</p>
                            <p>2,244 reviews on ⭐ Trustpilot</p>
                        </div>
                    </div>

                    <div className="block w-full mb-3" data-aos="fade-up">
                        <div className="w-full space-y-1 rounded-lg bg-[#22274A50] px-6 py-4 text-light-200">
                            <p className="space-x-2">
                                <span className="font-bold w-4 h-4 bg-white text-black rounded px-1">FB</span> 250k
                            </p>
                            <p>Loved by over hundreds of users</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex justify-end w-full" data-aos="flip-left">
                <img src="./assets/images/hero-img.webp" alt="" />
            </div>
        </div>
    )
}

export default Header