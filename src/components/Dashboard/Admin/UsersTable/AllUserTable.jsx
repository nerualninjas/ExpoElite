"use client"
import React, { useEffect } from 'react';
import useAllUserData from '@/hooks/users/useAllUserData';
import Image from 'next/image';
// import { UserAuth } from '@/app/(auth)/context/AuthContext';


const AllUserTable = () => {
  
    const { AllUserData, isPending, refetch } = useAllUserData();
   
   
    console.log(AllUserData)
    // const users= AllUserData;
    const users= AllUserData?.filter(item=> item.userRole==='user');
    useEffect(() => {
      console.log(users); // Log users to the console
    }, [users]);
    return (
        <div>
         
            
             <div className="overflow-x-auto">
  <table className="table mx-5 w-full mt-5 mb-10 pb-6">
    {/* head */}
   <thead>
      <tr>
        <th>#</th>
        <th> Name</th>
        <th> Email</th>
        <th> Image</th>
        <th>Role</th>
        <th>Action</th>
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
            <td> {user.userEmail}</td>
            <td> 
              <Image width={100}
    height={100}
    src={user?.userPhoto}
    alt="image" className='rounded-full w-[70px] h-[70px]'/></td>
  {/* {`/${user.userPhoto}`} */}
  {/* {`/images/${user?.userPhoto}`} */}
           
            <td> {user?.userRole}</td>
            <td> <button  className='btn text-white bg-[#3a9648]'>Approve <br />Seller Request</button></td>
            <td> <button  className=' btn text-white bg-[#d43a4c]'>Decline <br /> Request</button></td>
         
          
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