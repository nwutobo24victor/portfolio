import { useState } from "react";
import { useEffect } from "react";


function Navbar() {
    const [isHidden, setIsHidden] = useState(true);
    const [activeSection, setActiveSection] = useState('home'); // 👈 Track active

    const toggleVisibility = () => setIsHidden(!isHidden);

    const handleNavClick = (id) => {
        setActiveSection(id);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsHidden(true); // 👈 Optional: auto-close mobile menu
    };

    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'testimonials', label: 'Testimonials' }
    ];

    const getClass = (id) =>
        `px-4 cursor-pointer border-[#27ce80] ${activeSection === id ? 'border-b-2' : 'hover:border-b-2'
        }`;



    // // State to manage the visibility of the modal
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const item of menuItems) {
                const el = document.getElementById(item.id);
                if (el) {
                    const { top, bottom } = el.getBoundingClientRect();
                    const elementTop = window.scrollY + top;
                    const elementBottom = window.scrollY + bottom;

                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        setActiveSection(item.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <nav className="w-full block fixed top-0 left-0 z-50 bg-[#020013]">
            <div className="relative">
                <div className="flex justify-between items-center lg:px-10 px-2 py-2">
                    <img src="./assets/images/nwutobo_short.png" width="50" className="lg:hidden block" />

                    <p className="hidden lg:flex items-center gap-2">
                        <img src="./assets/images/nwutobo_short.png" width="30" />
                        <span className="text-3xl font-bold">Victor Charles Nwutobo</span>
                    </p>

                    {/* Desktop Nav */}
                    <div className="hidden lg:block font-semibold text-white">
                        <ul className="flex gap-4">
                            {menuItems.map(item => (
                                <li key={item.id} className={getClass(item.id)}>
                                    <button onClick={() => handleNavClick(item.id)}>{item.label}</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-2 items-center text-white">
                        <a
                            href="/contact"
                            className=" w-fit bg-[#27ce80] hover:opacity-80 text-black font-semibold rounded-lg px-6 py-2 transition-all duration-300 ease-in-out"
                        >
                            Contact
                        </a>

                        <a
                            role="button"
                            onClick={() => setIsModalOpen(true)}
                            className="hidden lg:block w-fit bg-[#413bff] hover:opacity-80 font-semibold rounded-lg px-6 py-2 transition-all duration-300 ease-in-out cursor-pointer"
                        >
                            Download CV
                        </a>
                        <span onClick={toggleVisibility} className="lg:hidden block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 11H14V13H3z"></path>
                                <path d="M3 6H17V8H3z"></path>
                                <path d="M3 16H17V18H3z"></path>
                                <path d="M21 16 21 8 16 12 21 16z"></path>
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Mobile Nav */}
                <div className={`${isHidden ? 'hidden' : ''} absolute w-full bg-[#02001340] z-50 backdrop-blur-sm text-white h-screen right-0  flex justify-end`}>
                    <div className="w-54 bg-[#020013] shadow-lg py-10 px-2">
                        <ul className="block space-y-3">
                            {menuItems.map(item => (
                                <li key={item.id} className={getClass(item.id)}>
                                    <button onClick={() => handleNavClick(item.id)}>{item.label}</button>
                                </li>
                            ))}
                            <li className=" pt-10"><a href="document/26_05_25_n_v_charles_cv_dev.docx.pdf" className="drop-shadow-[0_0_10px_#3CAAFB] block w-full bg-[#27ce80] text-black cursor-pointer hover:opacity-80 font-semibold rounded-lg px-6 py-2 transition-all duration-300 ease-in-out" download>Download CV</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div
                className={`${isModalOpen ? "flex" : "hidden"} fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50`}>
                <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 h-[90vh] relative">
                    {/* Close button */}
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl font-bold h-8 w-8 bg-red-500 rounded-full flex items-center justify-center transition-colors duration-300 "
                        aria-label="Close modal">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24" >
                                <path d="M19.07 19.07c3.9-3.9 3.9-10.24 0-14.14C17.18 3.04 14.67 2 12 2S6.82 3.04 4.93 4.93c-3.9 3.9-3.9 10.24 0 14.14 1.95 1.95 4.51 2.92 7.07 2.92s5.12-.98 7.07-2.92M7.76 14.83 10.59 12 7.76 9.17l1.41-1.41L12 10.59l2.83-2.83 1.41 1.41L13.41 12l2.83 2.83-1.41 1.41L12 13.41l-2.83 2.83z"></path>
                            </svg>
                        </span>
                    </button>

                    {/* PDF Viewer */}
                    <object
                        data="document/26_05_25_n_v_charles_cv_dev.docx.pdf" type="application/pdf" className="w-full h-full"  >
                        <p> Your browser does not support PDFs.{" "}
                            <a href="document/26_05_25_n_v_charles_cv_dev.docx.pdf" download className="text-blue-600 underline"> Download the PDF  </a> .
                        </p>
                    </object>
                </div>
            </div>

        </nav>



    );
}

export default Navbar;
