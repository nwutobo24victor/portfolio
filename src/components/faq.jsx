import React from "react";
import { useState } from 'react';

const Faq = () => {

    const faqs = [
        {
            question: 'What is your return policy?',
            answer: 'You can return any item within 30 days of purchase.',
        },
        {
            question: 'Do you offer international shipping?',
            answer: 'Yes, we ship worldwide with standard and express options.',
        },
        {
            question: 'How can I track my order?',
            answer: 'Once your order ships, we’ll send you a tracking number by email.',
        },
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
                    <p className={isOpen === index ? 'block  p-4 ' : 'hidden'}>{faq.answer}</p>
                </div>
            ))}
        </div>
    )
}

export default Faq