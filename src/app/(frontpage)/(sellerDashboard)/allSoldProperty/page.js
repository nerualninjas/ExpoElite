import React from 'react';
import PrivateRoutes from '@/libs/PrivateRoute';
import SoldProperty from '@/components/Dashboard/Seller/SoldPropertyOfSeller/SoldProperty';

const AllSoldProperty = () => {
    return (
        <PrivateRoutes>
            <div>
                <SoldProperty />
            </div>
        </PrivateRoutes>
    );
};

export default AllSoldProperty;