"use client"
import AllUserTable from '@/components/Dashboard/Admin/UsersTable/AllUserTable';

import React, { useState } from 'react';

const AllUsersData = () => {
    const [sellerRequestSent, setSellerRequestSent] = useState();
    return (
        <div>
            <AllUserTable sellerRequestSent={sellerRequestSent}/>
        </div>
    );
};

export default AllUsersData;