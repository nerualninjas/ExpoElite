import React from 'react';

import Image from 'next/image';

const OurMission = () => {
    return (
        <div className="  px-4 py-8 ">
              <div className="  w-24 border border-[#FF385D]  "></div>
      <h2 className="text-4xl pb-16 pt-8 font-semibold  text-[##54595F]">
      Our Mission
      </h2>

      <div className='w-full mx-auto mb-10 flex flex-col items-center justify-center'>
       

       <div className="mx-auto w-full  box2  flex flex-col lg:flex-row  items-center justify-center lg:justify-between mb-2 ">
       <div className='w-11/12 lg:w-1/3  flex  items-center  justify-center   lg:justify-end'> 

           {/* -------------------------------Our Mission image----------------------------------------- */}
           <div className='w-[300px] h-[300px] rounded-tl-full rounded-tr-full bg-[#FF385D] bg-opacity-15'>
       <Image width={500} height={1200} className='  relative -bottom-12  ' src="https://i.ibb.co/ZT81DKb/building1.png" alt="house" />
       </div></div>

       {/* -------------------------------Our Mission text----------------------------------------- */}
           <div className="ml-0 lg:ml-5 w-11/12 lg:w-2/3  text-center lg:text-left pt-10">
               
               <h1 className='text-2xl font-extrabold mb-2 text-[#FF385D]'>Our Mission is Pioneering the Future of <br /> Real Estate Transactions</h1>
               <p className="text-md">
               At ExpoElite, our mission is clear – to empower dreams by revolutionizing the property market.
                We strive to create a platform that goes beyond transactions, turning each interaction into a step towards fulfilling aspirations.
                 Whether you're envisioning your dream home, developing the next architectural marvel, or seeking the perfect rental space,
                ExpoElite is here to make your journey seamless and rewarding.
               </p>
              
           </div>

         

       </div>
    

   
</div>
        </div>

      
    );
};

export default OurMission;