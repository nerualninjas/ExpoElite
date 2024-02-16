import SoldPropertyDetails from '@/components/Dashboard/Admin/propertySellReport/SoldPropertyDetails';
import React from 'react';
import PrivateRoutes from '@/libs/PrivateRoute';
const page = () => {
    return (
        <PrivateRoutes>
        <div>
            <SoldPropertyDetails />
        </div>
        </PrivateRoutes>
    );
};

export default page;