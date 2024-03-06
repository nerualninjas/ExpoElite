'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHouse, faUserGear } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Image from 'next/image';

import usePropertyAllData from '@/hooks/Propertys/usePropertyAllData';
import useAllSellerData from '@/hooks/users/useAllSellerData';
import useAllUserData from '@/hooks/users/useAllUserData';


const OurStatistics = () => {
  const { propertyData} = usePropertyAllData();
  const totalProperty = propertyData ? propertyData.length : 0;

  const { AllSellerData} = useAllSellerData();
  const totalSeller = AllSellerData ? AllSellerData.length : 0;

  const {AllUserData}= useAllUserData();
  const totaluser = AllUserData ? AllUserData.length : 0;

  
  console.log("Total Property:", totalProperty)
  const [counter, setCounter] = useState(false)
  const countData = [
    {
      id: 1,
      count: totalProperty,
      title: 'Properties',
      icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
      id: 2,
      count: totalSeller,
      title: ' Sellers',
      icon: <FontAwesomeIcon icon={faUserGear} />,
    },
    {
      id: 3,
      count: totaluser,
      title: 'Users',
      icon: <FontAwesomeIcon icon={faUsers} />,
    }
  ]
  return (
    <div>
      <div className="w-full min-h-[50vh] my-10 rounded-lg bg-gradient-to-r from-pink-200 to-pink-100  mx-auto">
        <div className="w-full h-full flex flex-col lg:flex-row lg:items-end 2xl:items-end justify-between  lg:relative">

          <div className=" w-full lg:w-1/3  h-full">

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
                      <div key={data.id} className=" flex flex-col  items-center text-center p-2  w-[200px]   text-rose-600  hover:text-red-400  rounded mb-4">



                        <div className="  flex items-center justify-center w-[40px] h-[40px] rounded-full  text-rose-600 hover:text-red-400  text-xl">
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

          </div>

          <div className=" w-full lg:w-1/3  max-h-[350px] lg:absolute bottom-0 right-0 ">
            <Image
              width={916}
              height={764}
              className=" w-full max-h-[350px] "
             

              src={
                "https://i.ibb.co/h79NPN4/building2-remove-bg.png"
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