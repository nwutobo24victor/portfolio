import React from "react"

const About = () => {


    return (
        <div className="block w-full">

            <div className="lg:flex block gap-10">
                <div className="lg:w-1/4 w-full mb-6 bg-[#020013] rounded-lg p-3 h-fit" data-aos="flip-left">
                    <img src="./assets/images/nwutobo_victor_charles_img.jpeg" className="w-full h-auto rounded-lg" />
                </div>

                <div className="lg:w-3/4 w-full mb-6">
                    <p className="text-4xl font-bold mb-4">About <span className="text-[#27ce80]">Me</span></p>
                    <div className="block">
                        <p className="text-lg mb-4">I’m Nwutobo Victor Charles, a results-driven Full-Stack Web Developer and ICT Specialist with a passion for building innovative digital solutions that solve real-world problems. As co-founder of Drags Development (DragsDev) and Passtech Innovation, I specialize in designing and developing high-performance web applications, streamlining IT infrastructures, and driving digital transformation across various industries.</p>
                        <p className="text-lg mb-4">With hands-on experience in PHP, Laravel, JavaScript, MySQL, and system architecture, I’ve successfully delivered projects ranging from cab booking platforms and e-commerce systems to organizational websites and custom business tools. My approach prioritizes clean code, responsive design, and seamless user experience — all aligned with business objectives.</p>
                    </div>

                    <div className="block lg:flex gap-10">
                        <div className="block w-full mb-4" data-aos="fade-up">
                            <p className="text-lg font-bold mb-4"> Drags Development</p>
                            <p className="text-sm">Drags Development is a technology-driven agency focused on delivering custom software and digital solutions. We empower businesses with tools to thrive in today’s competitive landscape by offering:</p>
                            <ul className="list-disc pl-5 my-2">
                                <li className="text-sm">Web Development & UX/UI Design – Crafting modern, mobile-first websites and apps with great performance and usability.</li>
                                <li className="text-sm">E-Commerce Solutions – Developing secure, scalable online stores tailored to business goals.</li>
                                <li className="text-sm">Database Development & Optimization – Building and managing robust data systems for reliability and security.</li>
                                <li className="text-sm">Digital Marketing & SEO – Enhancing online presence through strategic campaigns and on-site optimization.</li>
                                <li className="text-sm">IT Consultancy – Guiding businesses through digital challenges with expert insight and scalable solutions.</li>
                            </ul>
                            <p className="text-sm">Our mission is to simplify technology for businesses and unlock growth through innovation.</p>
                        </div>
                        <div className="block w-full mb-4" data-aos="fade-up">
                            <p className="text-lg font-bold mb-4"> Passtech Innovation</p>
                            <p className="text-sm">At Passtech Innovation, we focus on building solutions that shape the future. Our work spans multiple sectors, combining technology with purpose:</p>
                            <ul className="list-disc pl-5 my-2">
                                <li className="text-sm">EdTech Solutions – Enabling schools and learning platforms to connect, teach, and grow through customized digital tools.</li>
                                <li className="text-sm">ICT Infrastructure – Designing IT ecosystems that support business operations with speed, security, and flexibility.</li>
                                <li className="text-sm">Sustainable Energy – Delivering solar and inverter technologies that reduce costs and support a greener planet.</li>
                                <li className="text-sm">Security & Surveillance Systems – Providing smart access control and CCTV solutions for safe, monitored environments.</li>
                            </ul>
                            <p className="text-sm">We are committed to creating intelligent, secure, and sustainable innovations for today and tomorrow.</p>
                        </div>
                    </div>

                    <p className="text-lg font-bold mb-4">Notable Projects & Achievements</p>
                    <div className="grid lg:grid-cols-2 grid-col-1 lg:gap-6 gap-2">
                        <div className="flex items-center col-span-1 bg-[#020013] p-2 rounded-lg mb-1" data-aos="fade-up">
                            <div className="block bg-[#27ce80] rounded-full p-2 mr-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="m20.77 9.16-1.37-4.1a2.99 2.99 0 0 0-2.85-2.05H7.44a3 3 0 0 0-2.85 2.05l-1.37 4.1c-.72.3-1.23 1.02-1.23 1.84v5c0 .75.42 1.4 1.04 1.74-.01.07-.04.13-.04.2V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2h12v2c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2.06c0-.07-.03-.13-.04-.2.62-.34 1.04-.99 1.04-1.74v-5c0-.83-.51-1.54-1.23-1.84ZM20 13.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M5.5 12c.83 0 1.5.67 1.5 1.5S6.33 15 5.5 15 4 14.33 4 13.5 4.67 12 5.5 12m1.94-7h9.12a1 1 0 0 1 .95.68L18.62 9H5.39L6.5 5.68A1 1 0 0 1 7.45 5Z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="block">
                                <p className="text-lg font-bold">Cab Booking Platform (KJSG Cabs)</p>
                                <p className="text-sm">Developed a fully functional ride-booking system with real-time tracking and payment integration — boosting efficiency and service delivery.</p>
                            </div>
                        </div>

                        <div className="flex items-center col-span-1 bg-[#020013] p-2 rounded-lg mb-1" data-aos="fade-up">
                            <div className="block bg-[#27ce80] rounded-full p-2 mr-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m6 13.43c-.24.55-.6.99-.81.97s-.33-.36-.26-.76.36-.93.66-1.17c.29-.25.61-.36.69-.24.09.11-.04.66-.28 1.21Zm.38-6.89c-.31.12-1.12-.26-1.8-.86-.67-.6-1.27-1.06-1.33-1.02s.29.67.78 1.42c.49.74 1.25 1.34 1.69 1.32.45-.02.72.3.6.71-.11.41-.54 1.05-.95 1.42s-.74 1.12-.74 1.67-.46 1.74-1.02 2.64-1.45 1.73-1.99 1.85c-.53.11-1.27-.48-1.64-1.31-.37-.84-.6-1.74-.52-2 .09-.27-.02-.91-.24-1.42-.22-.52-.53-1.22-.69-1.55-.16-.34-.85-.59-1.54-.56s-1.55-.29-1.92-.71-.63-1.12-.59-1.55c.05-.44.54-1.16 1.09-1.61s1.28-1 1.62-1.23c.33-.23.91-.49 1.29-.59.37-.09.77 0 .87.21s.41.36.67.33c.27-.03.91.03 1.44.13s1.09.05 1.26-.12.22-.33.11-.37c-.1-.04-.6-.18-1.1-.31s-1.17-.38-1.48-.55-1.07-.17-1.69 0c-.46.13-1.01.15-1.41.08a8 8 0 0 1 2.83-.53 7.99 7.99 0 0 1 7.01 4.16c-.2.16-.44.3-.63.38Z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="block">
                                <p className="text-lg font-bold">Man O’ War Nigeria Website</p>
                                <p className="text-sm">
                                    Developed a professional website for Man O’ War Nigeria, boosting their online presence and fostering stronger community involvement. The site functions as a centralized platform for sharing news, updates, and key information about the organization's programs and initiatives.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center col-span-1 bg-[#020013] p-2 rounded-lg mb-1" data-aos="fade-up">
                            <div className="block bg-[#27ce80] rounded-full p-2 mr-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="m21.8,6.4l-2.7-3.6c-.38-.5-.97-.8-1.6-.8H6.5c-.63,0-1.22.3-1.6.8l-2.7,3.6c-.13.17-.2.38-.2.6v1c0,1.01.39,1.91,1,2.62v9.38c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2v-9.38c.61-.7,1-1.61,1-2.62v-1c0-.22-.07-.43-.2-.6Zm-4.3-2.4l2.5,3.33v.67c0,1.1-.9,2-2,2s-2-.9-2-2v-1c0-.08,0-.16-.03-.24l-.69-2.76h2.22Zm-6.72,0h2.44l.78,3.12v.88c0,1.1-.9,2-2,2s-2-.9-2-2v-.88l.78-3.12Zm-6.78,3.33l2.5-3.33h2.22l-.69,2.76c-.02.08-.03.16-.03.24v1c0,1.1-.9,2-2,2s-2-.9-2-2v-.67Zm11,12.67h-6v-5c0-.55.45-1,1-1h4c.55,0,1,.45,1,1v5Z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="block">
                                <p className="text-lg font-bold">Mini Supermarket POS System</p>
                                <p className="text-sm">
                                    Designed and deployed a custom POS system for a mini supermarket, enhancing day-to-day retail operations. The solution features inventory control, sales monitoring, and customer management tools, significantly increasing operational efficiency and accuracy.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center col-span-1 bg-[#020013] p-2 rounded-lg mb-1" data-aos="fade-up">
                            <div className="block bg-[#27ce80] rounded-full p-2 mr-4">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path className="b" d="m20.5,16h-5.5v-1h4c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2H5c-1.1,0-2,.9-2,2v9c0,1.1.9,2,2,2h4v1H3.5c-.83,0-1.5.67-1.5,1.5v3c0,.83.67,1.5,1.5,1.5h17c.83,0,1.5-.67,1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5ZM5,4h14v9s-14,0-14,0V4Zm10,16H5v-2h10v2Zm3,0c-.55,0-1-.45-1-1s.45-1,1-1,1,.45,1,1-.45,1-1,1Z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="block">
                                <p className="text-lg font-bold">Corporate Website for NAPEC</p>
                                <p className="text-sm">
                                    Designed and delivered a modern corporate website for NAPEC, emphasizing professionalism and ease of use. The platform showcases the company’s services and products through a clean interface, enhancing accessibility and brand presentation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About