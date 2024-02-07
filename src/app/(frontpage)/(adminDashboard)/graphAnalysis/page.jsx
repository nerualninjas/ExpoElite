

// import AdminDetails from '@/components/Dashboard/Admin/AdminDetails';
// import PropertyVsSold from '@/components/Dashboard/Admin/PropertyVsSold';

// import TotalProperty2 from '@/components/Dashboard/Admin/TotalProperty2';
// import UserVsSeller from '@/components/Dashboard/Admin/UserVsSeller';
// import AllUserTable from '@/components/Dashboard/Admin/UsersTable/AllUserTable';
import AdminDetails from '@/components/Dashboard/Admin/AdminDetails';
import PropertyVsSold from '@/components/Dashboard/Admin/PropertyVsSold';
import TotalProperty2 from '@/components/Dashboard/Admin/TotalProperty2';
import TotalSeller from '@/components/Dashboard/Admin/TotalSeller';
import TotalUser from '@/components/Dashboard/Admin/TotalUser';
import UserVsSeller from '@/components/Dashboard/Admin/UserVsSeller';
import React from 'react';

<<<<<<< HEAD:src/app/(frontpage)/(adminDashboard)/adminDashboard/page.jsx
const GraphAnalysis = () => {
    return (
        <div className="w-full min-h-screen mt-5 flex  flex-col  justify-center items-center ">
        <div className="w-11/12 min-h-screen  flex justify-center items-center bg-gradient-to-r from-rose-200 via-base-100 to-rose-100 blur-[90px] absolute"></div>
       <div className="w-full  flex flex-col  justify-center items-center rounded-xl bg-opacity-10 z-10 bg-base-200 pb-32 ">

       <div className='w-full h-full flex flex-col '>
            <div className='flex '>
              <div className='flex w-2/6  justify-center items-center'>
=======
const DashBoard = () => {
  return (
    <div className="w-full min-h-screen mt-5 flex flex-col justify-center items-center ">
      <div className="w-11/12 min-h-screen rounded-lg flex justify-center items-center bg-gradient-to-r from-rose-200 via-base-100 to-rose-200 blur-[90px] absolute">
      </div>
      <div className="w-full flex flex-col justify-center items-center rounded-xl bg-opacity-10 z-10 bg-base-200 pb-20">
        <div className='w-full h-full flex flex-col bg-rose-100 py-20 rounded-lg'>
          <div className='flex '>
            <div className='flex w-2/6  justify-center items-center'>
>>>>>>> 58bd6a0cc72df3a770847a39950620314c5e74ca:src/app/(frontpage)/dashboard/page.jsx
              <AdminDetails />
            </div>
            <div className='flex w-4/6  justify-center items-center gap-4'>
              <TotalProperty2 />
              <TotalSeller />
              <TotalUser />
            </div>
          </div>
          <div className='flex mt-8 gap-4'>
            <div className='w-1/2 flex justify-center items-end'> <PropertyVsSold /></div>
            <div className='w-1/2 flex justify-center items-end'> <UserVsSeller /></div>
          </div>
<<<<<<< HEAD:src/app/(frontpage)/(adminDashboard)/adminDashboard/page.jsx

       </div>
          
          
=======
>>>>>>> 58bd6a0cc72df3a770847a39950620314c5e74ca:src/app/(frontpage)/dashboard/page.jsx
        </div>

      </div>


    </div>
  );
};

export default GraphAnalysis;