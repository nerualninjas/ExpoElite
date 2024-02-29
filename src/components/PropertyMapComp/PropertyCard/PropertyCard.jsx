import React from 'react';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import usePropertyAllData from '@/hooks/Propertys/usePropertyAllData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const PropertyCard = ({setPosition}) => {

    const { propertyData, isPending, refetch }= usePropertyAllData()
    
    return (
        <div  className="py-5">
             <Swiper
            
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="gap-2 grid grid-cols-2 md:grid-cols-8 sm:grid-cols-4">
      {propertyData?.slice(0,8).map((item, index) => (
        <Card  shadow="sm" key={index} isPressable onPress={() => setPosition([34.0383255,-118.2435527])}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <span><b>{item.propertyType}</b> 
            {/* <p className="text-default-500">{item.location}</p> */}
            </span>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>


      </SwiperSlide>
      <SwiperSlide>
      <div className="gap-2 grid grid-cols-2 md:grid-cols-8 sm:grid-cols-4">
      {propertyData?.slice(9,16).map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => setPosition([34.0383255,-118.2435527])}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <span><b>{item.propertyType}</b> 
            {/* <p className="text-default-500">{item.location}</p> */}
            </span>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
      </SwiperSlide>
    

    </Swiper>
    </div>
      
    );
};

export default PropertyCard;