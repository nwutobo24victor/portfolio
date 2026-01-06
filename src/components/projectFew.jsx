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
        title: "Recruitment Portal",
        image: "assets/images/mown_rec.jpeg",
        link: "http://recruitment.manowarng.org",
        description:
            "An optimized platform that facilitates seamless recruitment processes for Man O' War Nigeria.",
        action: "Visit Website"
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
        title: "Napec Marshal Corp",
        image: "assets/images/napec_project.jpeg",
        link: "http://napec.ing",
        description:
            "A corporate site for a security company offering expert personnel and security gadgets.",
        action: "Visit Website"
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
    }
];

const ProjectFew = () => {


    return (

        <div className="block">

            <div className="block w-full">
                <header className="text-left mb-16">
                    <h2 className="text-3xl font-bold mb-6 pb-2">Delivered <span className="text-[#27ce80]">Projects</span></h2>
                    <p className="text-lg  max-w-3xl">
                        Explore a curated list of web development projects ranging from dynamic content platforms to full-scale business applications. Each project showcases a blend of creativity, usability, and functionality.
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

                <div className="block mt-10">
                    <p className="text-lg font-semibold mb-4">Want to see more? Browse my projects.</p>
                    <a href="/projects" className="w-fit bg-[#27ce80] hover:opacity-80 text-black font-semibold rounded-lg px-6 py-2 transition-all duration-300 ease-in-out flex gap-1 items-center">Projects
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Arrow-right SVG Icon</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m-7-7l7 7l-7 7" /></svg>
                    </a>
                </div>


            </div>

        </div>
    )
}

export default ProjectFew
