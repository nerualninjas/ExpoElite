'use client'
import React from 'react';
import { useRouter } from "next/navigation";
import usePropertyData from "@/hooks/Propertys/usePropertyData";
import { faBed, faBath, faCouch, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import Link from 'next/link';
const PropertyDetailsSmallPart = ({ propertyId }) => {

    const router = useRouter();
    //   const { id } = router.query;
    console.log(router.query);

    const { propertySingleData, isPending, refetch } = usePropertyData(
        propertyId
    );


    // const { title, price /* other properties */ } = propertyData;
    const { propertyName, propertyType, price, image, bathrooms, bedrooms, livingRoom } = propertySingleData || {};
    return (
        <div className='w-full bg-rose-200 -translate-y-56 md:-translate-y-32  rounded py-10 md:py-10 px-4 md:px-20 my-10 '>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
             
              <Image  src={image} alt="property image" width={150} height={150} />
             
   
                <div className='text-center md:text-start'>
                    <h1 className='text-lg md:text-xl'>{propertyType}</h1>
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
                {/* will take to rentdetails page */}
                <Link href={'/rent'} className='bg-rose-600 hover:bg-rose-100 text-white hover:text-rose-700 px-4 py-2 rounded text-extrabold'>Wanna Rent?</Link>

            </div>
        </div>
    );
};

export default PropertyDetailsSmallPart;