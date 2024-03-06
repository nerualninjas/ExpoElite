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
import Title2 from '@/components/shared/Title/Title2';

const GraphAndAnalysisSeller = () => {
    return (
      <PrivateRoutes>
      

      <div className='w-full mx-auto min-h-screen p-5'>
            <Title2 title='Seller Dashboard' />
            <div className='w-11/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-3 mb-10'>
                <SellerDetail  className='w-full md:w-1/2 ' />
                <MyListedProperty className='w-full md:w-1/2' /> 
                <MySoldProperty className='w-full md:w-1/2' />
                <GotPayment className='w-full md:w-1/2' />
               
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <MySoldVsUnsold className='w-full md:w-1/2 ' />
                <TotalPropertyVsMyProperty className='w-full md:w-1/2' />
            </div>
        </div>
       </PrivateRoutes>
    );
};

export default GraphAndAnalysisSeller;