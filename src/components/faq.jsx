import React from "react";
import { useState } from 'react';

const Faq = () => {

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We specialize in web development, including frontend and backend solutions, e-commerce platforms, and custom web applications.",
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary depending on complexity, but most projects are completed within 4 to 12 weeks.",
        },
        {
            question: "Do you provide post-launch support and maintenance?",
            answer: "Yes, we offer ongoing support and maintenance packages to keep your website secure and up to date.",
        },
        {
            question: "Can you help with website hosting and domain registration?",
            answer: "Absolutely! We can assist with hosting setup, domain registration, and DNS configurations to ensure a smooth launch.",
        },
        {
            question: "Do you optimize websites for SEO?",
            answer: "Yes, SEO best practices are integrated during development to improve your website’s visibility on search engines.",
        },
        {
            question: "Will my website be mobile-friendly?",
            answer: "All our websites are fully responsive and optimized for mobile, tablet, and desktop devices.",
        },
        {
            question: "How do I request a quote for my project?",
            answer: "You can contact us through the contact form on our website or email us directly with your project details for a free consultation.",
        },
        {
            question: "What technologies do you work with?",
            answer: "We work with modern technologies such as React, Vue, Node.js, Laravel, Tailwind CSS, and more to deliver high-quality solutions.",
        },
        {
            question: "Do you offer training or documentation for managing my website?",
            answer: "Yes, we provide comprehensive documentation and training sessions to help you manage your website efficiently.",
        },
        {
            question: "Can you help migrate my existing website to a new platform?",
            answer: "Certainly! We handle website migrations ensuring minimal downtime and preserving your SEO rankings.",
        }
    ];



    const [isOpen, setIsOpen] = useState(false);

    const toggle = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    return (
        <div className="block w-full space-y-4">

            {faqs.map((faq, index) => (
                <div className="block w-full bg-[#22274A50] rounded-lg p-6" key={index}>
                    <p className="font-bold flex items-center justify-between text-base mb-2 cursor-pointer" onClick={() => toggle(index)}>
                        <span className="block">{faq.question}</span>
                        <span className="block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24" >
                                <path d="M17.35 8H6.65c-.64 0-.99.76-.56 1.24l5.35 6.11c.3.34.83.34 1.13 0l5.35-6.11C18.34 8.76 18 8 17.36 8Z"></path>
                            </svg>
                        </span>
                    </p>
                    <p className={isOpen === index ? 'block  p-4 transition-transform duration-300 ease-in-out' : 'hidden'}>{faq.answer}</p>
                </div>
            ))}
        </div>
    )
}

export default Faq