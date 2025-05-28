import React from "react"

const Header = () => {


    return (
        <div className="block lg:flex items-center">
            <div className="block w-full space-y-5 ">
                <p className="font-light uppercase text-white lg:text-left text-center">
                    <span className="bg-[#22274A] w-fit rounded-lg px-2">Start Your Personalized Developer Learning Path </span>
                </p>

                <h1 className="lg:text-6xl text-4xl lg:text-left text-center font-bold text-white">
                    Code <span className="text-[#3CAAFB]">Your Way</span> to a
                    <span className="text-[#3CAAFB] lg:block">Life-Changing</span>
                    <span className="lg:block">Career</span>
                </h1>

                <p className="text-xl text-white lg:text-left text-center">
                    Stop wasting time on scattered tutorials. Get a personalized learning path, build real-world projects, and land your dream job—faster.
                </p>

                <p className="block lg:flex items-center gap-4 ">
                    <a href="" className="block w-full mb-3 bg-[#3CAAFB] hover:opacity-80 text-black font-semibold rounded-lg px-6 py-3 transition-all duration-300 ease-in-out">Become a Pro Member</a>
                    <a href="" className="block w-full mb-3 bg-[#22274A] hover:opacity-80 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300 ease-in-out">Build My Custom Learning Path</a>
                </p>

                <div className="block lg:flex items-center gap-4">
                    <div className="block w-full mb-3">
                        <div className="w-full space-y-1 rounded-lg bg-[#22274A50] px-6 py-4 text-light-200">
                            <p>Excellent ⭐⭐⭐⭐⭐</p>
                            <p>2,244 reviews on ⭐ Trustpilot</p>
                        </div>
                    </div>

                    <div className="block w-full mb-3">
                        <div className="w-full space-y-1 rounded-lg bg-[#22274A50] px-6 py-4 text-light-200">
                            <p className="space-x-2">
                                <span className="font-bold w-4 h-4 bg-white text-black rounded px-1">FB</span> 250k
                            </p>
                            <p>Loved by 1,500,000+ developers</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex justify-end w-full">
                <img src="./assets/images/hero-img.webp" alt="" />
            </div>
        </div>
    )
}

export default Header