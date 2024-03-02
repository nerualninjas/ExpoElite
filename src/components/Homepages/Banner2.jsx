"use client"

import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';



import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner2 = () => {
    return (
        <div className='w-full min-h-[50vh]'>
       
        <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        
        modules={[Autoplay]}
        className="mySwiper flex justify-center items-center"
      >
        
        <SwiperSlide>
       
          <div className=" w-11/12 mx-auto flex  flex-col md:flex-row items-center justify-between   my-10  rounded-xl bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300  ">
           

          <div className="w-11/12 lg:w-2/5  ml-10  md:pl-0 md:mr-8  ">
              <h2 className="font-bold text-3xl text-gray-700"> 
              <span className="text-rose-400 mt-2">Discover</span> a place 
  you&apos;ll love <br />to live</h2>
              <p className="text-md mt-1">
              A Journey Through a Diverse Spectrum of Real Estate, Ranging from Opulent Luxury Estates to Intimate Cozy Retreats – Your Personalized Dream Home Experience Awaits.
              </p>
              <Link href="/propertyMap">
              <button className="rounded-full mt-2 bg-[#E85671] p-1 text-white md:text-2xl">
                <MdArrowOutward />
              </button>
              </Link>
            </div>
           

              <div className="w-full lg:w-2/5  flex justify-end items-end">
              <Image
                  width={320}
                  height={265}
                  className="h-[350px] object-cover object-left-top z-10 flex justify-center items-center"
                  src={
                    "https://i.ibb.co/0YPQynP/building-removebg.png"
                  }
                 
                  alt="picture"
                />
              </div>

  
        </div>
        </SwiperSlide>
        <SwiperSlide>
       
          <div className=" w-11/12 mx-auto flex  flex-col md:flex-row items-center justify-between   my-10  rounded-xl bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300  ">
           

          <div className="w-11/12 lg:w-2/5  ml-10 md:pl-0 md:mr-8  ">
              <h2 className="font-bold text-3xl mt-1 text-gray-700"> 
              <span className="text-rose-400">Find</span> your perfect property <br /> match</h2>
              <p className="text-md mt-1">
              A world of real estate variety, spanning opulent luxury estates to intimate cozy retreats. Your ideal home is out there, waiting to be discovered.
              </p>
              <Link href="/propertyMap">
              <button className="rounded-full mt-2 bg-[#E85671] p-1 text-white md:text-2xl">
                <MdArrowOutward />
              </button>
              </Link>
            </div>
           

              <div className="w-full lg:w-2/5  flex justify-end items-end">
              <Image
                  width={320}
                  height={265}
                  className="h-[350px] object-cover object-left-top z-10 flex justify-center items-center"
                  src={
                    "https://i.ibb.co/j5PqJ5k/banner3-removebg-preview.png"
                  }
                 
                  alt="picture"
                />
              </div>

  
        </div>
        </SwiperSlide>
        
       
        <SwiperSlide>
       
       <div className=" w-11/12 mx-auto flex  flex-col md:flex-row items-center justify-between   my-10  rounded-xl bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300  ">
        

       <div className="w-11/12 lg:w-2/5  ml-10 md:pl-0 md:mr-8  ">
           <h2 className="font-bold mt-1  text-3xl text-gray-700"> 
           <span className="text-rose-400">Explore</span> our collection of cxclusive <br /> properties</h2>
           <p className="text-md mt-1">
           A rich tapestry of real estate options, from opulent luxury estates to intimate cozy retreats. Your dream home is within reach, promising a personalized haven for every discerning taste.
           </p>
           <Link href="/propertyMap">
           <button className="rounded-full mt-2 bg-[#E85671] p-1 text-white md:text-2xl">
             <MdArrowOutward />
           </button>
           </Link>
         </div>
        

           <div className="w-full lg:w-2/5  flex justify-end items-end">
           <Image
               width={320}
               height={265}
               className="h-[350px] object-cover object-left-top z-10 flex justify-center items-center"
               src={
                "https://i.ibb.co/jrmcNVn/banner5-removebg-preview.png"
               }
              
               alt="picture"
             />
           </div>


     </div>
     </SwiperSlide>
      </Swiper>
      </div>
    );
};

export default Banner2;




// "https://i.ibb.co/jrmcNVn/banner5-removebg-preview.png"
// "https://i.ibb.co/0YPQynP/building-removebg.png"

// "https://i.ibb.co/j5PqJ5k/banner3-removebg-preview.png"