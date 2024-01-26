'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers , faHouse, faUserGear } from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Image from 'next/image';


const OurStatistics = () => {
    const [counter, setCounter] = useState(false)
    const countData = [
        {
            id: 1,
            count: 788,
            title: 'All Properties',
            icon: <FontAwesomeIcon icon={faHouse} />,
        },
        {
            id: 2,
            count: 399,
            title: ' All Agents   ',
            icon: <FontAwesomeIcon icon={faUserGear} />,
        },
        {
            id: 3,
            count: 600,
            title: ' All Buyers   ',
            icon: <FontAwesomeIcon icon={faUsers} />,
        }
    ]
    return (
  <div>
    <div className="w-full  my-10 rounded-lg bg-gradient-to-r from-pink-200 to-pink-100  mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between ">
          <div className=" w-full lg:w-2/5 ">
           
            <div className='pl-8 py-8 '>
         <div className=''>
         <div className="  w-24 border border-[#FF385D]  "></div>
      <h2 className="text-4xl pt-8 font-semibold  text-[#54595F]">
      About Us
      </h2>
      <p className="text-sm mt-4">
            ExpoElite emerged from a shared vision of creating a space where every property transaction is an experience worth cherishing.
            </p>
         </div>
         
          <i className="fa-solid fa-users"></i>
          {/* scroll for count */}
        <ScrollTrigger onEnter={() => setCounter(true)}>
            <div>

                
            </div>
         <div className='flex flex-col md:flex-row justify-between items-center gap-2  ' >
            {
                // dynamically data load
                countData.map((data) => (
                    <div key={data.id} className=" flex flex-col  items-center text-center p-2 border-xl w-[200px]   text-rose-600  hover:text-red-400  rounded mb-4">
               
                  
                        
               <div className="  flex items-center justify-center w-[40px] h-[40px] rounded-full  text-rose-600 hover:text-red-400  text-2xl">
                {data.icon}
                </div>
                            <h1 className="text-2xl font-semibold">
                                {counter && <CountUp start={0} end={data.count} duration={2} delay={0} />}+
                            </h1>
                            <p className="text-md pt-2">{data.title}</p>
                    </div>
                ))
            }
        </div>
        </ScrollTrigger>
       </div>
            {/* <button className="rounded-full bg-[#FF385D] text-white md:text-3xl">
              <MdArrowOutward />
            </button> */}
          </div>
          
            <div className=" w-full lg:w-3/5 ">
              <Image
                width={611}
                height={408}
                className=" w-full h-full"
                src={
                  "https://i.ibb.co/mqHfZNz/building-removebg-preview.png"
                }
                alt="picture"
              />
            </div>
          
        </div>
      </div>
    {/* Our Statistics */}
         
  </div>
    );
};

export default OurStatistics;