// import AllSellerTable from '@/components/Dashboard/Admin/sellerTable/AllSellerTable';
import AllUserTable from '@/components/Dashboard/Admin/UsersTable/AllUserTable';
import AllSellerTable from '@/components/Dashboard/Admin/sellerTable/AllSellerTable';
import useAllSellerData from '@/hooks/users/useAllSellerData';
import useAllUserData from '@/hooks/users/useAllUserData';
import React from 'react';


const AllUsersDataTable = () => {
   
    const { AllSellerData } = useAllSellerData
    console.log("AllSellerData");
    console.log(AllSellerData);
    // const users= AllSellerData;
    return (
        <div>
        
         {/* <AllUserTable /> */}
         <AllSellerTable />
        </div>
    );
};

export default AllUsersDataTable;