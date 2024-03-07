"use client"
import usePropertyAllData from '@/hooks/Propertys/usePropertyAllData';

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBed,
  faBath,
  faCouch,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';
import useOfferProperty from '@/hooks/Propertys/useOfferProperty';

const SpecialOfferProperty = () => {
    const {offerProperty, offerPropertyLength,isPending, refetch  } = useOfferProperty();
    const properties = offerProperty?.products;
   
    console.log(properties);


      


    return (
        <div>
 

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 bg-base-100 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-6">
            {properties?.map((property, index) => (
           


             <div key={index}  className="px-2 py-2 container rounded-xl flex justify-center items-center max-w-[450px] bg-base-100 shadow-xl transition-transform transform hover:scale-105">
             <div className="w-1/3">
              <Image width={500} height={300}
                   src={property?.image}  
                   alt={property?.title}  
                   className="rounded-xl w-[160px] h-[100px]"
                 />
             </div >
             <div className="ml-2 w-2/3">
             <h2 className="card-title font-bold text-lg text-[#2C2946] text-left pb-1">
                   {property?.title}
                 </h2>
                 <div className='flex justify-between'>
                  <div><h2 className="card-title font-bold text-sm  text-left pb-2 text-[#ff385d]">
                   ${property?.price}
                 </h2></div>
                 <div> <Link
                          href="/products/[id]"
                          as={`/products/${property._id}`}
                        >
                          <span className=" rounded-full text-[#FF004D] px-2 "><FontAwesomeIcon icon={faArrowRight}/></span>
                        </Link></div>
                 </div>
               
               <div className="">
               <div className="flex text-xs  w-full    content-stretch justify-between pb-2">
                  <div className="w-1/3">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faBed}
                        className="text-gray-500 mr-1"
                      />
                      <span className="font-bold"> {property?.bedrooms} </span>
                    </div>
                  
                  </div>
                  <div className="w-1/3">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faBath}
                        className="text-gray-500 mr-1"
                      />
                      <span className="font-bold"> {property?.bathrooms} </span>
                    </div>
                   
                  </div>
                  <div className="w-1/3">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faCouch}
                        className="text-gray-500 mr-1"
                      />
                      <span className="font-bold"> {property?.livingRoom} </span>
                    </div>
                  
                  </div>
                  </div>

                  <hr className="pb-2" />
                <div className="card-actions py-2 flex justify-between w-full">
                  <div className="text-xs ">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-gray-500 mr-1"
                      />
                      {property.location}
                    </div>
                  </div>
                 
                </div>
               </div>
             </div>
           </div>
          
          ))}
            </div> 
        </div>
       
    );
};

export default SpecialOfferProperty;