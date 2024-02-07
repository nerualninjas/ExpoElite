

import AdminDetails from '@/components/Dashboard/Admin/AdminDetails';
import PropertyVsSold from '@/components/Dashboard/Admin/PropertyVsSold';
import TotalProperty from '@/components/Dashboard/Admin/TotalProperty';
import TotalProperty2 from '@/components/Dashboard/Admin/TotalProperty2';
import React from 'react';

const DashBoard = () => {
    return (
        <div>
          dashboard
          <div className='w-full'>
            <AdminDetails />
            <TotalProperty />
            <TotalProperty2 />
          <PropertyVsSold />

          </div>
         
        </div>
    );
};

export default DashBoard;