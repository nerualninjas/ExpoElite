import Image from 'next/image';
import React from 'react';

const ContactBanner = () => {
    return (
        <div>
            {/* <div className="hero min-h-96 w-full" style={{ backgroundImage: 'url(https://i.postimg.cc/kMH13pQc/ht1.jpg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-white text-5xl font-bold">Contact Us</h1>
                        <div className="text-sm text-center breadcrumbs">
                            <ul>
                                <li><a>ExpoElite</a></li>
                                <li><a>Contact US</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='w-full ' >
              <Image src="https://i.postimg.cc/kMH13pQc/ht1.jpg" width={2500} height={1000} alt="contact banner" className='w-full h-full object-cover relative' />
              <h1 className='text-blue-900 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-5xl font-bold'>Contact Us</h1>
            </div>
        </div>
    );
};

export default ContactBanner;