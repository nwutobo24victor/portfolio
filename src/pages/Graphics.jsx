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
                        <h2 class="text-3xl font-bold mb-6 pb-2">Graphics Design <span >Projects</span></h2>
                        <p className="text-lg  text-center max-w-3xl mx-auto">
                            Explore a diverse collection of visually appealing graphic designs, from eye-catching flyers to promotional materials crafted to communicate ideas with clarity and style. Each design reflects creativity, precision, and a strong understanding of brand identity.
                        </p>
                        <p className="text-lg  text-left">
                            <a href="./" className="text-[#27ce80]">Home </a> / <span> Graphics</span> 
                        </p>
                    </header>
                </section>


                <section id="graphics" className="w-full mb-20 lg:p-6 px-2 py-2 rounded-lg" data-aos="fade-up">
                    <ProjectAll />
                </section>

                <section className="w-full mb-20 flex item-center justify-center">
                    <a href="./projects" className="w-fit bg-[#27ce80] hover:opacity-80 text-black font-semibold rounded-lg px-6 py-2 transition-all duration-300 ease-in-out">View Web Projects</a>
                </section>


            </div>

            <footer className="w-full bg-[#27ce8050] lg:px-10 px-2 py-2">
                <Footer />
            </footer>
        </main >
    )
}

export default Project

