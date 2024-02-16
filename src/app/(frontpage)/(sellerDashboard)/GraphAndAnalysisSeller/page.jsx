import AdminDetails from '@/components/Dashboard/Admin/AdminDetails';
import PropertyVsSold from '@/components/Dashboard/Admin/PropertyVsSold';
import TotalProperty from '@/components/Dashboard/Seller/graphAnalysisSeller/MySoldProperty';
import TotalProperty2 from '@/components/Dashboard/Admin/TotalProperty2';
import TotalSeller from '@/components/Dashboard/Admin/TotalSeller';
import MySoldVsUnsold from '@/components/Dashboard/Seller/graphAnalysisSeller/MySoldVsUnsold';
import TotalPropertyVsMyProperty from '@/components/Dashboard/Seller/graphAnalysisSeller/TotalPropertyVsMyProperty';
import React from 'react';
import MySoldProperty from '@/components/Dashboard/Seller/graphAnalysisSeller/MySoldProperty';
import MyListedProperty from '@/components/Dashboard/Seller/graphAnalysisSeller/MyListedProperty';
import SellerDetail from '@/components/Dashboard/Seller/graphAnalysisSeller/SellerDetail';
import GotPayment from '@/components/Dashboard/Seller/graphAnalysisSeller/GotPayment';
import PrivateRoutes from '@/libs/PrivateRoute';

const GraphAndAnalysisSeller = () => {
    return (
      <PrivateRoutes>
        <div className="w-full min-h-screen mt-5 flex flex-col justify-center items-center ">
        {/* <div className="w-full lg:w-11/12 min-h-screen rounded-lg flex justify-center items-center bg-gradient-to-r from-rose-200 via-base-100 to-rose-200 blur-[90px] absolute"> */}
        {/* </div> */}
        <div className="w-full flex flex-col justify-center items-center rounded-xl bg-opacity-10 z-10 bg-base-200 pb-20">
          <div className='w-full h-full flex flex-col bg-rose-100 bg-opacity-20 py-20 rounded-lg'>
            <div className='flex flex-col lg:flex-row justify-around items-center '>
              <div className='flex justify-around items-center mb-5 lg:mb-0' >
                <SellerDetail />
              </div>
              <div className='flex flex-col lg:flex-row w-full lg:w-4/6  justify-center items-center gap-4'>
              <MyListedProperty />
              <MySoldProperty />
            <GotPayment />
              </div>
            </div>


            <div className="flex flex-col lg:flex-row mt-4 justify-around items-center">
            <div className="rounded-md shadow-md flex flex-col  p-2 justify-center items-center bg-base-100 dark:bg-gray-900 dark:text-gray-50 border-gray-200 ">
            {/* className='w-full lg:w-1/2 flex justify-center items-end overflow-hidden border-2' */}
            <MySoldVsUnsold />  
            </div>
            <div className="rounded-md shadow-md flex flex-col  p-2 justify-center items-center bg-base-100 dark:bg-gray-900 dark:text-gray-50 border-gray-200 ">
            {/* className='w-full lg:w-1/2 flex justify-center items-end overflow-hidden border-2' */}
            <TotalPropertyVsMyProperty />
            </div>
           
            </div>
           
            {/* <div className='flex flex-col lg:flex-row  mt-8 gap-4 '>
              <div className='w-full lg:w-1/2 flex justify-center items-end overflow-hidden border-2'> <MySoldVsUnsold /></div>
              <div className='w-full lg:w-1/2 flex justify-center items-end overflow-hidden border-2'> <TotalPropertyVsMyProperty /></div>
            </div> */}
          </div>
  
        </div>
  
  
      </div>
       </PrivateRoutes>
    );
};

export default GraphAndAnalysisSeller;