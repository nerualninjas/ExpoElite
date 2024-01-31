'use client'
import React from 'react';
import { useRouter } from "next/navigation";
import usePropertyData from "@/hooks/Propertys/usePropertyData";
import { faBed, faBath, faCouch, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
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
        <div className='w-full bg-white -translate-y-32 rounded py-10 px-20 my-10 '>
            <div className='flex justify-between items-center '>
                <Image src={image} alt="property image" width={150} height={150} />

                <div className=''>
                    <h1 className='text-xl'>{propertyType}</h1>
                    <h1 className='text-lg '>{propertyName}</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <div>
                        <FontAwesomeIcon
                            icon={faBed}
                            className="text-rose-500 mr-1 text-xl"
                        />{" "}
                        <span className="font-bold"> -- {bedrooms}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faBath}
                            className="text-rose-500 mr-1 text-xl"
                        />{" "}
                        <span className="font-bold"> -- {bathrooms} </span>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faCouch}
                            className="text-rose-500 mr-1 text-xl"
                        />{" "}
                        <span className="font-bold"> -- {livingRoom}</span>
                    </div>
                </div>

                <h1 className='text-2xl  '>${price}</h1>
                <button className='bg-rose-600 text-white px-4 py-2 rounded text-extrabold'>Comapare</button>

            </div>
        </div>
    );
};

export default PropertyDetailsSmallPart;