"use client"
import React, { useEffect } from 'react';
// import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAllUserData from '@/hooks/users/useAllUserData';
import Image from 'next/image';
// import { UserAuth } from '@/app/(auth)/context/AuthContext';


const AllUserTable = () => {

    // const axiosPublic = useAxiosPublic();
    // // const { loading } = UserAuth();
    // const { data: users, isLoading, error } = useQuery({
    //   queryKey: ['users'],
    //   queryFn: async () => {
    //     const res = await axiosPublic.get("/getUsers");
    //     return res?.data;
    //   }
    // });

    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }
    
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // }

  
    const { AllUserData, isPending, refetch } = useAllUserData();
   
    console.log(AllUserData)
    const users= AllUserData;
    useEffect(() => {
      console.log(users); // Log users to the console
    }, [users]);
    return (
        <div>
          <h2> All user table</h2>
            
             <div className="overflow-x-auto">
  <table className="table mx-5 w-full mt-5 mb-10 pb-6">
    {/* head */}
   <thead>
      <tr>
        <th>#</th>
        <th> Name</th>
        <th> Email</th>
        <th>Role</th>
        <th>Action</th>
       

      </tr>
    </thead>
    <tbody> 
      
      {/* row 1 */}
    {
        users?.map((user,index)=>
        <tr key={user._id}>
            <th> {index+1} </th>
            <td> {user.userName}</td>
            <td> <Image width={100} height={100} src="" alt="" /></td>
            <td> {user.userEmail}</td>
            <td> {user.userRole}</td>
            <td  className='btn text-white bg-[#FECDD3]'>Details</td>
          
        </tr>
        )
     }  
     </tbody>
  </table>
  
</div> 

        </div>
    );
};

export default AllUserTable;