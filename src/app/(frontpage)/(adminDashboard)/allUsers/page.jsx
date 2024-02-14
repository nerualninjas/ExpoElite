"use client"
import AllUserTable from '@/components/Dashboard/Admin/UsersTable/AllUserTable';
import PrivateRoutes from '@/libs/PrivateRoute'
import React, { useState } from 'react';

const AllUsersData = () => {
    const [sellerRequestSent, setSellerRequestSent] = useState();
    return (
        <PrivateRoutes>
            <div>
            <AllUserTable sellerRequestSent={sellerRequestSent}/>
        </div>
        </PrivateRoutes>
    );
};

export default AllUsersData;