import React from "react";


const graphics = [
    { image: './assets/images/graphics/marketing-victor-2.jpg', title: 'Marketing Design Concept' },
    { image: './assets/images/graphics/marketing-sunday.png', title: 'Sunday Marketing Campaign' },
    { image: './assets/images/graphics/10-marketing-victor-batch.png', title: 'Marketing Batch Design X' },
    { image: './assets/images/graphics/1-marketing-victor-batch.png', title: 'Marketing Batch Design I' },
    { image: './assets/images/graphics/1-aji-authority.png', title: 'AJI Authority Branding' },
    { image: './assets/images/graphics/dragsDev_2.jpg', title: 'DragsDev Brand Visual' },
    { image: './assets/images/graphics/1-mc-birthday-ensc.png', title: 'Birthday Flyer Design' },
    { image: './assets/images/graphics/5-african-innovators.png', title: 'African Innovators Campaign' },
    { image: './assets/images/graphics/independence-mown-ensc.png', title: 'Independence Day Design' },
    { image: './assets/images/graphics/rice-placeholder-evarich.png', title: 'Evarich Product Ad' },
    { image: './assets/images/graphics/marketing-victor.jpg', title: 'Marketing Creative Visual' },
    { image: './assets/images/graphics/birthday-mummy.png', title: 'Birthday Celebration Design' },
    { image: './assets/images/graphics/renesInt-logo.png', title: 'Renes International Logo' },
    { image: './assets/images/graphics/chinchin-amanda_stickers.png', title: 'Amanda Snacks Sticker Design' },
    { image: './assets/images/graphics/birthday_me1.jpg', title: 'Personal Birthday Design' },
    { image: './assets/images/graphics/amanda_delight.jpg', title: 'Amanda Delight Branding' },
    { image: './assets/images/graphics/cheda_whizzy4.jpg', title: 'Cheda Whizzy Promo Design' },
    { image: './assets/images/graphics/nccf_ihiala_sun_22.jpg', title: 'NCCF Event Flyer' },
    { image: './assets/images/graphics/e-way-multi-serviceUntitled-1.jpg', title: 'E-Way Multi Services Ad' },
    { image: './assets/images/graphics/cheetahXpress_bg.png', title: 'Cheetah Xpress Branding' },
    { image: './assets/images/graphics/3-marketing-victor-batch.png', title: 'Marketing Batch Design III' },
];

const graphicAll = () => {


    return (

        <div className="block">

            <div className="block w-full">


                <header className="text-left mb-16">
                    <h2 className="text-3xl font-bold mb-6 pb-2">Graphics Design <span className="text-[#27ce80]">Projects</span></h2>
                    <p className="text-lg  max-w-3xl">
                        A collection of visually compelling, brand-driven graphic designs crafted to communicate ideas clearly, capture attention, and create lasting impressions.
                    </p>
                </header>


                <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {graphics.map((project, index) => (
                        <article
                            key={index}
                            className="bg-[#22274A50] rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:border border-[#27ce80] hover:shadow-2xl hover:shadow-[#27ce80]/20"
                            data-aos="flip-left"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover"
                            />


                            <h3 className="text-sm font-semibold mb-2 p-2">{project.title}</h3>

                        </article>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default graphicAll
