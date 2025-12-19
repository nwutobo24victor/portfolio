import React from "react";
import Navbar from '../components/navbar';
import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skills";
import ProjectFew from "../components/projectFew";
import GraphicsSlide from "../components/graphicsSlide";
import Iframe from "../components/iframe";
import Testimonial from "../components/testimonials";
import Faq from "../components/faq";
import Footer from "../components/footer";

const Home = () => {

    return (
        <main className="w-full text-white bg-[#020013] min-h-screen">

            <div className=" lg:px-10 px-2 py-2">


                <Navbar />

                <div id="home" className="py-20"></div>
                <header className="w-full mb-20" data-aos="fade-up">
                    <Header />

                    <div id="about" className="mb-20"></div>
                </header>
                <section className="w-full mb-20 bg-[#27ce8030] lg:p-6 px-2 py-2 rounded-lg" data-aos="fade-up">
                    <About />

                    <div id="experience" className="mb-20"></div>
                </section>

                <section className="w-full mb-20 lg:p-6 px-2 py-2 rounded-lg" data-aos="fade-up">
                    <Experience />

                    <div id="skills" className="mb-20"></div>
                </section>


                <section className="w-full mb-20 bg-[#27ce8030]  lg:p-6 px-2 py-2 rounded-lg" data-aos="fade-up">
                    <Skills />

                    <div id="projects" className="mb-20"></div>
                </section>

                <section id="projects" className="w-full mb-20 lg:p-6 px-2 py-2 rounded-lg" data-aos="fade-up">
                    <ProjectFew />

                    <div id="graphics" className="mb-20"></div>
                </section>

                <section className="w-full mb-20 bg-[#27ce8030]  lg:p-6 px-2 py-2 rounded-lg" data-aos="fade-up">
                    <GraphicsSlide />

                    <div id="testimonials" className="mb-20"></div>
                </section>

                <section id="testimonials" className="w-full mb-20">
                    <div className="block lg:flex gap-6 w-full">
                        <div className="block lg:w-2/3 w-full mb-6">
                            <Iframe />
                        </div>

                        <div className="block lg:w-1/3 w-full mb-6">
                            <Testimonial />
                        </div>
                    </div>
                </section>

                <section className="w-full mb-20">

                    <p className="text-4xl font-bold mb-4">Frequently Asked <span className="text-[#27ce80]">Questions</span></p>

                    <div className="block grid lg:grid-cols-3 grid-cols-1 gap-6 w-full">
                        <div className="block col-span-1 mb-6 bg-cover rounded-lg" style={{ backgroundImage: "url('assets/images/faq-question-information-helpdesk-graphic-word.jpg')" }}>
                        </div>

                        <div className="block col-span-2 mb-6">
                            <Faq />
                        </div>
                    </div>
                </section>


            </div>

            <footer className="w-full bg-[#27ce8050] lg:px-10 px-2 py-2">
                <Footer />
            </footer>
        </main >
    )
}

export default Home

