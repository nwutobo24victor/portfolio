import React from "react"
import "../assets/css/slider.css"

const slide = () => {
    return (
        <div className="block w-full">
            <p className="text-4xl font-bold mb-4">Customer Feedback</p>
            <div className="max-h-[500px] slider-container">
                <div className="block w-full space-y-3 slider-content">
                    <div className="w-full space-y-1 rounded-lg bg-[#22274A50] p-4 text-light-200 slide ">
                        <p className="block text-base mb-4">
                            Charles delivered a custom POS system that streamlined our sales process dramatically. His tech skills and attention to detail are outstanding!
                        </p>
                        <p className="block">
                            <span className="block font-bold">Tunde A. ⭐⭐⭐⭐⭐</span>
                            <span className="block">Retail Store Owner</span>
                        </p>
                    </div>

                    <div className="w-full space-y-1 rounded-lg bg-[#22274A50] p-4 text-light-200 slide ">
                        <p className="block text-base mb-4">
                            Thanks to Charles, our cab booking platform runs flawlessly. The user-friendly interface and reliable backend have boosted our customer retention.
                        </p>
                        <p className="block">
                            <span className="block font-bold">Ada E. ⭐⭐⭐⭐⭐</span>
                            <span className="block">Logistics Manager</span>
                        </p>
                    </div>

                    <div className="w-full space-y-1 rounded-lg bg-[#22274A50] p-4 text-light-200 slide ">
                        <p className="block text-base mb-4">
                            Charles created a beautiful and functional website for our NGO. It helped us increase donations and improve community engagement significantly.
                        </p>
                        <p className="block">
                            <span className="block font-bold">Emeka O. ⭐⭐⭐⭐⭐</span>
                            <span className="block">NGO Director</span>
                        </p>
                    </div>

                    <div className="w-full space-y-1 rounded-lg bg-[#22274A50] p-4 text-light-200 slide ">
                        <p className="block text-base mb-4">
                            I highly recommend Charles for any custom tech solution. His POS system integrated perfectly with our inventory, saving us hours of manual work daily.
                        </p>
                        <p className="block">
                            <span className="block font-bold">Chika N. ⭐⭐⭐⭐⭐</span>
                            <span className="block">Restaurant Owner</span>
                        </p>
                    </div>

                    <div className="w-full space-y-1 rounded-lg bg-[#22274A50] p-4 text-light-200 slide ">
                        <p className="block text-base mb-4">
                            Working with Charles was seamless. He understood our vision for the e-commerce site and delivered a fast, secure, and scalable platform.
                        </p>
                        <p className="block">
                            <span className="block font-bold">Folake M. ⭐⭐⭐⭐⭐</span>
                            <span className="block">E-commerce Entrepreneur</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default slide