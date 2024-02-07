

import AdminDetails from '@/components/Dashboard/Admin/AdminDetails';
import PropertyVsSold from '@/components/Dashboard/Admin/PropertyVsSold';

import TotalProperty2 from '@/components/Dashboard/Admin/TotalProperty2';
import TotalSeller from '@/components/Dashboard/Admin/TotalSeller';
import TotalUser from '@/components/Dashboard/Admin/TotalUser';
import UserVsSeller from '@/components/Dashboard/Admin/UserVsSeller';
import React from 'react';

const DashBoard = () => {
  return (
    <div className="w-full min-h-screen mt-5 flex  flex-col  justify-center items-center ">
      <div className="w-11/12 min-h-screen  flex justify-center items-center bg-gradient-to-r from-rose-200 via-base-100 to-rose-100 blur-[90px] absolute"></div>
      <div className="w-full  flex flex-col  justify-center items-center rounded-xl bg-opacity-10 z-10 bg-base-200 pb-32 ">

        <div className='w-full h-full flex flex-col '>
          <div className='flex '>
            <div className='flex w-2/6  justify-center items-center'>
              <AdminDetails />
            </div>
            <div className='flex w-4/6 gap-2  justify-center items-center'>
              <TotalProperty2 />
              <TotalSeller />
              <TotalUser />
            </div>
          </div>

          <div className='flex mt-7'>
            <div className='w-1/2 flex justify-center items-end'> <PropertyVsSold /></div>
            <div className='w-1/2 flex justify-center items-end'> <UserVsSeller /></div>
          </div>
        </div>

      </div>


    </div>
  );
};

export default DashBoard;