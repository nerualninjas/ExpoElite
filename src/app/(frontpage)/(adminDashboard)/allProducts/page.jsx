import AllProductTable from '@/components/Dashboard/ProductTable/AllProductTable';
import React from 'react';
import PrivateRoutes from '@/libs/PrivateRoute';
const AllProductData = () => {
    return (
        <PrivateRoutes>
        <div>

            <AllProductTable />
        </div>
        </PrivateRoutes>
    );
};

export default AllProductData;