import React from "react";
import Navbar from '../components/navbar';
import ProjectAll from "../components/projectAll";
import Footer from "../components/footer";

const Project = () => {

    return (
        <main className="w-full text-white bg-[#020013] min-h-screen">

            <div className=" lg:px-10 px-2 py-2">

                <Navbar active='true' />

                <div id="home" className="py-10"></div>

                <section className="bg-[#27ce8030] rounded-lg p-3 w-full mb-10  flex items-center justify-center" data-aos="fade-up">
                    <header className="text-center w-full">
                        <h2 className="text-3xl font-bold mb-6 pb-2">Web Development <span >Projects</span></h2>
                        <p className="text-lg  text-center max-w-3xl mx-auto">
                            Discover a range of dynamic web projects, including business websites, booking platforms, dashboards, and full-scale applications. Every project focuses on usability, performance, and modern functionality to deliver seamless digital experiences.
                        </p>
                        <p className="text-lg  text-left">
                            <a href="./" className="text-[#27ce80]">Home </a> / <span> Projects</span> 
                        </p>
                    </header>
                </section>


                <section id="projects" className="w-full mb-20 lg:p-6 px-2 py-2 rounded-lg" data-aos="fade-up">
                    <ProjectAll />
                </section>

                <section className="w-full mb-20 flex item-center justify-center">
                    <a href="./graphics" className="w-fit bg-[#27ce80] hover:opacity-80 text-black font-semibold rounded-lg px-6 py-2 transition-all duration-300 ease-in-out">View Graphics Project</a>
                </section>


            </div>

            <footer className="w-full bg-[#27ce8050] lg:px-10 px-2 py-2">
                <Footer />
            </footer>
        </main >
    )
}

export default Project

