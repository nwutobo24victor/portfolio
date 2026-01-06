import React, { useState, useEffect } from 'react';

const ProjectFew = () => {

    const images = [
        './assets/images/graphics/marketing-victor-2.jpg',
        './assets/images/graphics/marketing-sunday.png',
        './assets/images/graphics/10-marketing-victor-batch.png',
        './assets/images/graphics/1-marketing-victor-batch.png',
        './assets/images/graphics/1-aji-authority.png',
        './assets/images/graphics/dragsDev_2.jpg',
        './assets/images/graphics/1-mc-birthday-ensc.png',
        './assets/images/graphics/5-african-innovators.png',
        './assets/images/graphics/independence-mown-ensc.png',
        './assets/images/graphics/rice-placeholder-evarich.png',
        './assets/images/graphics/marketing-victor.jpg',
        './assets/images/graphics/birthday-mummy.png',
        './assets/images/graphics/renesInt-logo.png',
        './assets/images/graphics/chinchin-amanda_stickers.png',
        './assets/images/graphics/birthday_me1.jpg',
        './assets/images/graphics/amanda_delight.jpg',
        './assets/images/graphics/cheda_whizzy4.jpg',
        './assets/images/graphics/nccf_ihiala_sun_22.jpg',
        './assets/images/graphics/e-way-multi-serviceUntitled-1.jpg',
        './assets/images/graphics/cheetahXpress_bg.png',
        './assets/images/graphics/3-marketing-victor-batch.png',
    ];

    // Duplicate images for infinite loop (triple for seamless loop)
    const duplicatedImages = [...images, ...images, ...images];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (duplicatedImages.length - 2));
        }, 4000); // Auto-slide every 4 seconds

        return () => clearInterval(interval);
    }, [duplicatedImages.length]);

    // Function to handle dot click
    const handleDotClick = (targetIndex) => {
        let newIndex = targetIndex - 1;
        if (newIndex < 0) newIndex += images.length;
        setCurrentIndex(newIndex);
    };

    // Calculate translateX for sliding (move by 1/3 each time)
    const translateX = (currentIndex * 100) / 3;

    // Determine active dot index (center visible image)
    const activeDotIndex = (currentIndex + 1) % images.length;

    return (

        <div className="block">

            <div className="block w-full">
                <header className="text-left mb-16">
                    <h2 className="text-3xl font-bold mb-6 pb-2">Graphics & Flyer <span className="text-[#27ce80]">Designs</span></h2>
                    <p className="text-lg  max-w-3xl">
                        A showcase of visually engaging flyers and graphic works crafted to communicate clearly, attract attention, and elevate brand identity.
                    </p>
                </header>

                <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full">
                    <div className="relativew w-full smax-w-6xl mx-auto overflow-hidden col-span-1 lg:col-span-3">
                        <div
                            className="flex gap-2 transition-transform duration-1500 ease-out"
                            style={{ transform: `translateX(-${translateX}%)` }}
                        >
                            {duplicatedImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`slide lg:w-1/3 w-full flex-shrink-0 p-1 ${index === currentIndex + 1 ? 'ring-4 ring-[#27ce80]' : ''
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-[600px] object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Dots indicator */}
                        <div className="flex justify-center mt-4 space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${index === activeDotIndex ? 'bg-[#27ce80]' : 'bg-gray-300'
                                        }`}
                                    onClick={() => handleDotClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="block mt-10">
                    <p className="text-lg font-semibold mb-4">Want to see more? Browse my designs.</p>
                    <a href="/graphics" className="w-fit bg-[#27ce80] hover:opacity-80 text-black font-semibold rounded-lg px-6 py-2 transition-all duration-300 ease-in-out flex gap-1 items-center">Graphics
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Arrow-right SVG Icon</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m-7-7l7 7l-7 7" /></svg>
                    </a>
                </div>


            </div>

        </div>
    )
}

export default ProjectFew
