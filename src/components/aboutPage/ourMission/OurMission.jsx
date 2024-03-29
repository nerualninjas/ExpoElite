import React from 'react';

import Image from 'next/image';

const OurMission = () => {
    return (
        <div className="  px-4 py-8 ">
              <div className="  w-24 border border-[#FF385D]  "></div>
      <h2 className="text-4xl pb-16 pt-8 font-semibold  text-[#54595F]">
      Our Mission
      </h2>

      <div className='w-full mx-auto mb-10 flex flex-col items-center justify-between '>
       

       <div className="mx-auto w-full  box2  flex flex-col lg:flex-row  items-center  lg:justify-between mb-2 ">
       <div className='w-11/12 lg:w-1/3  flex  items-center  justify-center  lg:justify-center'> 

           {/* -------------------------------Our Mission image----------------------------------------- */}
           <div className='w-[350px] h-[340px] rounded-tl-full rounded-tr-full bg-[#FF385D] bg-opacity-15  flex justify-end items-end'>
       <Image  width={611}
              height={408}
              className=" w-full " src="https://i.ibb.co/0Cg5wkx/building-removebg.png" alt="house" />
       </div>
       </div>

       {/* -------------------------------Our Mission text----------------------------------------- */}
           <div className="ml-0 lg:ml-5 w-11/12 lg:w-2/3  text-center lg:text-left pt-10">
               
               <h1 className='text-3xl font-extrabold mb-2 text-[#FF385D]'>Our Mission is Pioneering the Future of <br/>Real Estate Transactions</h1>
               <p className="text-md mt-4">
               At ExpoElite, our mission is clear – to empower dreams by revolutionizing the property market.
                We strive to create a platform that goes beyond transactions, turning each interaction into a step towards fulfilling aspirations.
                 Whether you&apos;re envisioning your dream home, developing the next architectural marvel, or seeking the perfect rental space,
                ExpoElite is here to make your journey seamless and rewarding.
               </p>
              
           </div>

         

       </div>
    

   
</div>
        </div>

      
    );
};

export default OurMission;