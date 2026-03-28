import React from "react";


const projects = [
    {
        title: "Nigeria Institute of Builders Ogun State",
        image: "assets/images/niob-ogun-project.jpeg",
        link: "http://niobogun.org",
        description:
            "A sleek, high-impact digital platform built to elevate the institute’s online presence, streamline communication, and showcase excellence in the building industry.",
        action: "Visit Website",
        technology: 'React, PHP, MySql, Tailwind',
    },
    {
        title: "Man O' War Nigeria Blog",
        image: "assets/images/new_manowarng.org.jpeg",
        link: "http://manowarng.org",
        description:
            "A dynamic blog platform designed to amplify stories, updates, and the real impact of the organization in an engaging and accessible way.",
        action: "Visit Website",
        technology: 'Js, Jquery, PHP, MySql, Tailwind',
    },
    {
        title: "POS & Inventory System",
        image: "assets/images/pos_project.png",
        link: "https://github.com/nwutobo24victor/case_study_pos",
        description:
            "A powerful retail solution built to simplify sales, automate inventory tracking, and boost operational efficiency for modern businesses.",
        action: "View Case Study",
        technology: 'Js, Jquery, PHP, MySql, Bootstrap',
    },
    {
        title: "Recruitment Portal",
        image: "assets/images/mown_rec.jpeg",
        link: "http://recruitment.manowarng.org",
        description:
            "A fast, user-friendly recruitment platform engineered to streamline applications, screening, and onboarding processes seamlessly.",
        action: "Visit Website",
        technology: 'Js, Jquery, PHP, MySql, Tailwind',
    },
    {
        title: "Drags Development",
        image: "assets/images/drags_dev.jpeg",
        link: "http://dragsdev.com.ng",
        description:
            "A bold and professional corporate website crafted to position the brand strongly and attract clients with a clean digital identity.",
        action: "View Website",
        technology: 'Wordpress, Php, CSS, JS',
    },
    {
        title: "St Pauls Online Store",
        image: "assets/images/stpauls_project.jpeg",
        link: "https://stpaulsonline.ng/",
        description:
            "A seamless e-commerce experience designed to showcase and sell spiritual items with ease, trust, and smooth navigation.",
        action: "Visit Website",
        technology: 'Wordpress, Php, CSS, JS',
    },
    {
        title: "KJSG Cab Booking",
        image: "assets/images/kjsg_project.jpeg",
        link: "http://kjsgcab.icu",
        description:
            "A smart, responsive cab-booking platform built for speed, security, and a smooth ride experience from request to destination.",
        action: "Visit Website",
        technology: 'Blade, Laravel, MySql, Tailwind, Bing Map API, OSM API',
    },
    {
        title: "Survey Feedback Platform",
        image: "assets/images/survey_project.jpeg",
        link: "http://survey.manowarng.org",
        description:
            "An intuitive feedback system designed to capture insights, analyze responses, and empower smarter decision-making.",
        action: "Visit Website",
        technology: 'Js, Jquery, PHP, MySql, Tailwind',
    },
    {
        title: "Napec Marshal Corp",
        image: "assets/images/napec_project.jpeg",
        link: "http://napec.ing",
        description:
            "A strong corporate web presence built to highlight security expertise, services, and reliability with clarity and confidence.",
        action: "Visit Website",
        technology: 'Js, Jquery, PHP, MySql, Bootstrap',
    },
    {
        title: "Flight Search with Amadeus API",
        image: "assets/images/flight_search.jpeg",
        link: "https://github.com/nwutobo24victor/flight",
        description:
            "A real-time flight search tool powered to deliver fast, accurate travel options with a smooth user experience.",
        action: "View Project",
        technology: 'Js, Jquery, PHP, MySql, Tailwind, Amadeus API',
    },
    {
        title: "Renes Hicy International LTD",
        image: "assets/images/reneshicy_project.png",
        link: "https://reneshicy.com.ng/",
        description:
            "A clean and professional corporate website designed to showcase building materials and interior solutions with style and clarity.",
        action: "View Website",
        technology: 'Js, Jquery, PHP, MySql, Bootstrap',
    },
    {
        title: "D’Young Unlimited Cre8tivity",
        image: "assets/images/d-young-creative.jpeg",
        link: "https://d-young-unlimited-cre8tivity.vercel.app/",
        description:
            "A vibrant digital showcase crafted to highlight creativity in fashion, branding, and print services with a bold visual appeal.",
        action: "View Website",
        technology: 'Js, Jquery, PHP, MySql, Tailwind',
    },
    {
        title: "Real-Time Video Call App",
        image: "assets/images/telcom-video-call.jpeg",
        link: "https://github.com/nwutobo24victor/video-voice-call.git",
        description:
            "A real-time communication app built for seamless video interactions, delivering speed, clarity, and reliability.",
        action: "View Project",
        technology: 'Js, Jquery, PHP, MySql, Tailwind',
    }
];

const ProjectAll = () => {


    return (

        <div className="block">

            <div className="block w-full">


                <header className="text-left mb-16">
                    <h2 className="text-3xl font-bold mb-6 pb-2">Web Development <span className="text-[#27ce80]">Projects</span></h2>
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

                                <p className="flex gap-4 justify-between items-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="text-[#27ce80] font-medium hover:underline"
                                    >
                                        {project.action}
                                    </a>

                                    <span className="text-xs text-gray-400">{project.technology}</span>
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default ProjectAll
