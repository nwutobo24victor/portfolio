// src/App.jsx
import { Link } from 'react-router-dom';

import { useState } from "react";

function Navbar() {

    const [isHidden, setIsHidden] = useState(true);

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    return (
        <nav className="w-full block fixed top-0 left-0 z-50 bg-[#020013]">
            <div className="relative">
                <div className="flex justify-between items-center lg:px-10 px-2 py-2">
                    <img src="./assets/images/nwutobo_short.png" width="50" className="lg:hidden block" />

                    <p className="hidden lg:flex items-center gap-2">
                        <img src="./assets/images/nwutobo_short.png" width="30" />
                        <span className="text-3xl font-bold">Nwutobo Victor Charles</span>
                    </p>

                    <div className="hidden lg:block font-semibold text-white">
                        <ul className="flex gap-4">
                            <li className='hover:border-b-2 border-[#3CAAFB] px-4'><Link to="/" className="">Home</Link></li>
                            <li className='hover:border-b-2 border-[#3CAAFB] px-4'> <Link to="/#about" className="">About</Link></li>
                            <li className='hover:border-b-2 border-[#3CAAFB] px-4'> <Link to="/#skills" className="">Skills</Link></li>
                            <li className='hover:border-b-2 border-[#3CAAFB] px-4'> <Link to="/#projects" className="">Projects</Link></li>
                            <li className='hover:border-b-2 border-[#3CAAFB] px-4'> <Link to="/#testimonials" className="">Testimonials</Link></li>
                        </ul>
                    </div>

                    <div className="flex gap-2 items-center text-white">
                        <a href="/contact" className="w-fit bg-[#3CAAFB] hover:opacity-80 text-black font-semibold rounded-lg px-6 py-2 transition-all duration-300 ease-in-out">Contact</a>
                        <span onClick={toggleVisibility} className='lg:hidden block'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                                fill="currentColor" viewBox="0 0 24 24" >
                                <path d="M3 11H14V13H3z"></path><path d="M3 6H17V8H3z"></path><path d="M3 16H17V18H3z"></path><path d="M21 16 21 8 16 12 21 16z"></path>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className={`${isHidden ? "hidden" : ""} absolute w-54 bg-[#02001340] z-50 backdrop-blur-sm text-white h-screen right-0 py-10`}>
                    <ul className="block space-y-3">
                        <li className='hover:border-b-2 border-[#3CAAFB] px-4'><Link to="/" className="">Home</Link></li>
                        <li className='hover:border-b-2 border-[#3CAAFB] px-4'> <Link to="/#about" className="">About</Link></li>
                        <li className='hover:border-b-2 border-[#3CAAFB] px-4'> <Link to="/#skills" className="">Skills</Link></li>
                        <li className='hover:border-b-2 border-[#3CAAFB] px-4'> <Link to="/#projects" className="">Projects</Link></li>
                        <li className='hover:border-b-2 border-[#3CAAFB] px-4'> <Link to="/#testimonials" className="">Testimonials</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;