import PropertySellReport from '@/components/Dashboard/Admin/propertySellReport/PropertySellReport';
import React from 'react';
import PrivateRoutes from '@/libs/PrivateRoute';

const AllPropertySellReport = () => {
    return (
        <PrivateRoutes>
        <div>
            <PropertySellReport />
        </div>
        </PrivateRoutes>
    );
};

export default AllPropertySellReport;