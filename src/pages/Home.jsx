import React from "react";
import Navbar from '../components/navbar';
import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Iframe from "../components/iframe";
import Testimonial from "../components/testimonials";
import Faq from "../components/faq";
import Footer from "../components/footer";

const Home = () => {

    return (
        <main className="w-full text-white bg-[#020013] min-h-screen">

            <div className=" lg:px-10 px-2 py-2">


                <Navbar />

                <div className="py-20"></div>
                <header className="w-full mb-20" data-aos="fade-up">
                    <Header />
                </header>

                <section className="w-full mb-20 bg-[#22274A] lg:p-6 px-2 py-2 rounded-lg" data-aos="fade-up">
                    <About />
                </section>

                <section className="w-full mb-20 lg:p-6 px-2 py-2 rounded-lg" data-aos="fade-up">
                    <Experience />
                </section>


                <section className="w-full mb-20">
                    <div className="block lg:flex gap-6 w-full">
                        <div className="block lg:w-2/3 w-full mb-6">
                            <Iframe />
                        </div>

                        <div className="block lg:w-1/3 w-full mb-6">
                            <Testimonial />
                        </div>
                    </div>
                </section>

                <section className="w-full mb-20 bg-[#22274A]  lg:p-6 px-2 py-2 rounded-lg" data-aos="fade-up">
                    <Skills />
                </section>

                <section className="w-full mb-20">
                    <div className="block lg:flex gap-6 w-full">
                        <div className="block lg:w-1/3 w-full mb-6">
                            <p className="text-4xl font-bold mb-4">Frequently Asked <span className="text-[#3CAAFB]">Questions</span></p>
                            <p className="text lg">Your path to clarity and understanding</p>
                        </div>

                        <div className="block lg:w-2/3 w-full mb-6">
                            <Faq />
                        </div>
                    </div>
                </section>


            </div>

            <footer className="w-full bg-[#22274A50] lg:px-10 px-2 py-2">
                <Footer />
            </footer>
        </main >
    )
}

export default Home

