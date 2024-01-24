import Image from 'next/image';
import React from 'react';
import { IoHome } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
// import homeIcon from "../../assets/icon/home-icon.png";
// import contact from "../../assets/icon/contact-us-50.png";
const ContactBanner = () => {
    return (

            <div className='w-full ' >
                <Image src="https://i.postimg.cc/kMH13pQc/ht1.jpg" width={2500} height={1000} alt="contact banner" className='w-full h-full object-cover relative opacity-50' />
                <div className='absolute top-1/3 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center'>
                    <h1 className='text-rose-500  text-6xl font-bold'>Contact Us</h1>
                    <div className='flex items-center justify-center gap-4'>
                    <div className='flex items-center justify-center gap-4 text-slate-700 text-lg text-center'>
                        <IoHome /> <h1>ExpoElite</h1>
                    </div>
                    <div className='flex items-center justify-center gap-4 text-slate-700 text-lg text-center'>
                        <RiContactsFill /><a>Contact US</a>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default ContactBanner;