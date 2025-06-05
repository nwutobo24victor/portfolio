import React from "react"

const Projects = () => {


    return (

        <div className="block">

            <div className="block w-full">
                <header className="text-left mb-16">
                    <h2 class="text-3xl font-bold mb-6 pb-2">Delivered <span className="text-[#3CAAFB]">Projects</span></h2>
                    <p className="text-lg  max-w-3xl">
                        Explore a curated list of web development projects ranging from dynamic content platforms to full-scale business applications. Each project showcases a blend of creativity, usability, and functionality.
                    </p>
                </header>

                <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    <article className="bg-[#22274A50] rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105" data-aos="fade-up">
                        <a href="http://manowarng.org" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/mown_project.jpeg" alt="Man O' War Nigeria Blog Project Screenshot" className="w-full h-52 object-cover" />
                        </a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Man O' War Nigeria Blog</h3>
                            <p className="text-sm text-gray-400 mb-3">
                                A blog platform built to share updates, articles, and activities about the organization’s mission and impact.
                            </p>
                            <a href="http://manowarng.org" target="_blank" className="text-[#3CAAFB] font-medium hover:underline">Visit Website</a>
                        </div>
                    </article>

                    <article className="bg-[#22274A50] rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105" data-aos="fade-up">
                        <a href="http://manowarng.org" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/pos_project.png" alt="POS and Inventory Management System Screenshot" className="w-full h-52 object-cover" />
                        </a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">POS & Inventory System</h3>
                            <p className="text-sm text-gray-400 mb-3">
                                Developed for Presto Mart LTD, this system ensures seamless sales and inventory tracking for retail operations.
                            </p>
                            <a href="http://manowarng.org" target="_blank" className="text-[#3CAAFB] font-medium hover:underline">View Case Study</a>
                        </div>
                    </article>

                    <article className="bg-[#22274A50] rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105" data-aos="fade-up">
                        <a href="http://recruitment.manowarng.org" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/mown_rec.jpeg" alt="Recruitment Platform Project Screenshot" className="w-full h-52 object-cover" />
                        </a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Recruitment Portal</h3>
                            <p className="text-sm text-gray-400 mb-3">
                                An optimized platform that facilitates seamless recruitment processes for Man O' War Nigeria.
                            </p>
                            <a href="http://recruitment.manowarng.org" target="_blank" className="text-[#3CAAFB] font-medium hover:underline">Explore Platform</a>
                        </div>
                    </article>

                    <article className="bg-[#22274A50] rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105" data-aos="fade-up">
                        <a href="http://dragsdev.com.ng" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/drags_project.jpeg" alt="Drags Development Website Screenshot" className="w-full h-52 object-cover" />
                        </a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Drags Development</h3>
                            <p className="text-sm text-gray-400 mb-3">
                                A corporate website built for a growing tech start-up offering professional web and design services.
                            </p>
                            <a href="http://dragsdev.com.ng" target="_blank" className="text-[#3CAAFB] font-medium hover:underline">View Website</a>
                        </div>
                    </article>

                    <article className="bg-[#22274A50] rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105" data-aos="fade-up">
                        <a href="https://stpaulsonline.ng/" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/stpauls_project.jpeg" alt="St Pauls Online Store Screenshot" className="w-full h-52 object-cover" />
                        </a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">St Pauls Online Store</h3>
                            <p className="text-sm text-gray-400 mb-3">
                                An e-commerce platform tailored for selling Catholic literature and spiritual items.
                            </p>
                            <a href="https://stpaulsonline.ng/" target="_blank" className="text-[#3CAAFB] font-medium hover:underline">Visit Store</a>
                        </div>
                    </article>

                    <article className="bg-[#22274A50] rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105" data-aos="fade-up">
                        <a href="http://kjsgcab.icu" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/kjsg_project.jpeg" alt="KJSG Cab Booking Project Screenshot" className="w-full h-52 object-cover" />
                        </a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">KJSG Cab Booking</h3>
                            <p className="text-sm text-gray-400 mb-3">
                                A responsive ride-booking platform designed for a fast and secure cab service experience.
                            </p>
                            <a href="http://kjsgcab.icu" target="_blank" className="text-[#3CAAFB] font-medium hover:underline">See Details</a>
                        </div>
                    </article>

                    <article className="bg-[#22274A50] rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105" data-aos="fade-up">
                        <a href="http://survey.manowarng.org" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/survey_project.jpeg" alt="Survey Platform Screenshot" className="w-full h-52 object-cover" />
                        </a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Survey Feedback Platform</h3>
                            <p className="text-sm text-gray-400 mb-3">
                                Built to collect user feedback and help organizations make data-driven decisions.
                            </p>
                            <a href="http://survey.manowarng.org" target="_blank" className="text-[#3CAAFB] font-medium hover:underline">Visit Survey Site</a>
                        </div>
                    </article>

                    <article className="bg-[#22274A50] rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105" data-aos="fade-up">
                        <a href="http://napec.ing" target="_blank" rel="noopener noreferrer">
                            <img src="assets/images/napec_project.jpeg" alt="Napec Security Services Screenshot" className="w-full h-52 object-cover" />
                        </a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Napec Marshal Corp</h3>
                            <p className="text-sm text-gray-400 mb-3">
                                A corporate site for a security company offering expert personnel and security gadgets.
                            </p>
                            <a href="http://napec.ing" target="_blank" className="text-[#3CAAFB] font-medium hover:underline">Explore Website</a>
                        </div>
                    </article>
                </div>
            </div>

        </div>
    )
}

export default Projects