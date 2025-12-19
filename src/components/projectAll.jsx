import React from "react";


export const projects = [
    {
        title: "Man O' War Nigeria Blog",
        image: "assets/images/new_manowarng.org.jpeg",
        link: "http://manowarng.org",
        description:
            "A blog platform built to share updates, articles, and activities about the organization’s mission and impact.",
        action: "Visit Website"
    },
    {
        title: "POS & Inventory System",
        image: "assets/images/pos_project.png",
        link: "https://github.com/nwutobo24victor/case_study_pos",
        description:
            "Developed for Presto Mart LTD, this system ensures seamless sales and inventory tracking for retail operations.",
        action: "View Case Study"
    },
    {
        title: "Recruitment Portal",
        image: "assets/images/mown_rec.jpeg",
        link: "http://recruitment.manowarng.org",
        description:
            "An optimized platform that facilitates seamless recruitment processes for Man O' War Nigeria.",
        action: "Visit Website"
    },
    {
        title: "Drags Development",
        image: "assets/images/drags_dev.jpeg",
        link: "http://dragsdev.com.ng",
        description:
            "A corporate website built for a growing tech start-up offering professional web and design services.",
        action: "View Website"
    },
    {
        title: "St Pauls Online Store",
        image: "assets/images/stpauls_project.jpeg",
        link: "https://stpaulsonline.ng/",
        description:
            "An e-commerce platform tailored for selling Catholic literature and spiritual items.",
        action: "Visit Website"
    },
    {
        title: "KJSG Cab Booking",
        image: "assets/images/kjsg_project.jpeg",
        link: "http://kjsgcab.icu",
        description:
            "A responsive ride-booking platform designed for a fast and secure cab service experience.",
        action: "Visit Website"
    },
    {
        title: "Survey Feedback Platform",
        image: "assets/images/survey_project.jpeg",
        link: "http://survey.manowarng.org",
        description:
            "Built to collect user feedback and help organizations make data-driven decisions.",
        action: "Visit Website"
    },
    {
        title: "Napec Marshal Corp",
        image: "assets/images/napec_project.jpeg",
        link: "http://napec.ing",
        description:
            "A corporate site for a security company offering expert personnel and security gadgets.",
        action: "Visit Website"
    },
    {
        title: "Flight Search with Amadeus API",
        image: "assets/images/flight_search.jpeg",
        link: "https://github.com/nwutobo24victor/flight",
        description:
            "A tool that uses the Amadeus API to search and display real-time flight options.",
        action: "View Project"
    },
    {
        title: "Renes Hicy International LTD",
        image: "assets/images/reneshicy_project.png",
        link: "https://reneshicy.com.ng/",
        description:
            "A corporate website for a building and interior finishing company.",
        action: "View Website"
    },
    {
        title: "D’Young Unlimited Cre8tivity",
        image: "assets/images/d-young-creative.jpeg",
        link: "https://d-young-unlimited-cre8tivity.vercel.app/",
        description:
            "A fashion and branding website showcasing tailoring, branding, and printing services.",
        action: "View Website"
    },
    {
        title: "Real-Time Video Call App",
        image: "assets/images/telcom-video-call.jpeg",
        link: "https://github.com/nwutobo24victor/video-voice-call.git",
        description:
            "A real-time video calling web application built with PHP, JavaScript, and WebRTC.",
        action: "View Project"
    }
];

const ProjectAll = () => {


    return (

        <div className="block">

            <div className="block w-full">


                <header className="text-left mb-16">
                    <h2 class="text-3xl font-bold mb-6 pb-2">Web Development <span className="text-[#27ce80]">Projects</span></h2>
                    <p className="text-lg  max-w-3xl">
                        A collection of functional, user-focused websites and applications built to deliver performance, seamless user experience, and real business value.
                    </p>
                </header>


                <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="bg-[#22274A50] rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:border border-[#27ce80] hover:shadow-2xl hover:shadow-[#27ce80]/20"
                            data-aos="flip-left"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 object-cover"
                                />
                            </a>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                                <p className="text-sm text-gray-400 mb-3">{project.description}</p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="text-[#27ce80] font-medium hover:underline"
                                >
                                    {project.action}
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default ProjectAll
