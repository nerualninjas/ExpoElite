'use client'
import Image from 'next/image';
import React from 'react';
import { IoHome } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const ContactBanner = () => {
    const conImg = [

        {
            image: "https://i.postimg.cc/zDy3wn6f/2.jpg"
        },
        {
            image: "https://i.postimg.cc/sDk4pf2M/1.jpg"
        },
        {
            image: "https://i.postimg.cc/NjVq8HH1/1.jpg"
        },
        {
            image: "https://i.postimg.cc/FRzLMwRt/2.jpg"
        },
        {
            image: "https://i.postimg.cc/q7H2SmfQ/2.jpg"
        }
    ]
    const imageWidth = 1000;
    const imageHeight = 350;
    return (
        <Carousel className='w-full h-[120vh]' autoPlay={true} infiniteLoop={true}>
            {
                conImg.map((item, index) => (
                    <div style={{ position: 'relative' }} key={index}>
                        <Image src={item.image} width={imageWidth} height={imageHeight} alt="contact banner" className=' object-cover opacity-80' key={index} />
                        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center '>
                            <h1 className='text-rose-600  text-6xl font-bold'>Contact Us</h1>
                            <div className='flex items-center justify-center gap-4'>
                                <div className='flex items-center justify-center gap-4 text-rose-700 text-lg text-center'>
                                    <IoHome /> <h1>ExpoElite</h1>
                                </div>
                                <div className='flex items-center justify-center gap-4 text-rose-700 text-lg text-center'>
                                    <RiContactsFill /><a>Contact US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Carousel>
    );
};

export default ContactBanner;