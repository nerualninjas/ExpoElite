"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faCouch } from "@fortawesome/free-solid-svg-icons";
import usePropertyData from '@/hooks/Propertys/usePropertyData';


const PropertyDetailsSmallPart = ({ propertyId }) => {
    const { propertySingleData, isPending } = usePropertyData(propertyId);
    const { propertyName, propertyCategory, price, image, bathrooms, bedrooms, livingRoom } = propertySingleData || {};

   

        return (
            <div className='w-full bg-rose-200 -translate-y-56 md:-translate-y-32  rounded py-10 md:py-10 px-4 md:px-20 my-10 '>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <Image src={image} alt="property image" width={150} height={150} />
                    <div className='text-center md:text-start'>
                        <h1 className='text-lg md:text-xl'>{propertyCategory}</h1>
                        <h1 className='text-sm md:text-lg '>{propertyName}</h1>
                    </div>
                    <div className='flex md:flex-col items-center justify-between  gap-4'>
                        <div>
                            <FontAwesomeIcon
                                icon={faBed}
                                className="text-rose-500 mr-1 text-xl"
                            />{" "}
                            <span className="font-bold">  {bedrooms}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faBath}
                                className="text-rose-500 mr-1 text-xl"
                            />{" "}
                            <span className="font-bold">  {bathrooms} </span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faCouch}
                                className="text-rose-500 mr-1 text-xl"
                            />{" "}
                            <span className="font-bold">  {livingRoom}</span>
                        </div>
                    </div>
                    <h1 className=' text-xl font-bold text-rose-600 md:text-2xl  '>${price}</h1>
                 
                </div>
            </div>
        );
    };

    export default PropertyDetailsSmallPart;
