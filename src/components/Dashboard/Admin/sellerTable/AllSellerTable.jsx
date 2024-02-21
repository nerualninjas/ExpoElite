"use client"
import React, { useEffect } from 'react';
import useAllSellerData from '@/hooks/users/useAllSellerData';
import Image from 'next/image';
import SellerDetailsModal from './SellerDetailsModal';

const AllSellerTable = () => {

  
    const { AllSellerData, isPending, refetch } = useAllSellerData();

    useEffect(() => {
        console.log("Response data:", AllSellerData);
      }, [AllSellerData]);
      console.log("AllSellerData")
    console.log(AllSellerData)
    const sellers= AllSellerData;
  
    return (
        <div>
      
            
             <div className="overflow-x-auto">
  <table className="table mx-5 w-full mt-5 mb-10 pb-6 bg-base-100">
    {/* head */}
   <thead>
      <tr>
        <th>#</th>
        <th> Name</th>
        <th> Email</th>
        <th> Image</th>
        <th>Role</th>
        <th>Action</th>
     

      </tr>
    </thead>
    <tbody> 
      
      {/* row 1 */}
    {
        sellers?.map((seller,index)=>
        <tr key={seller._id}>
            <th> {index+1} </th>
            <td> {seller.userName}</td>
            <td> {seller.userEmail}</td>
            <td> 
              <Image width={80}
    height={80}
    src={seller?.userPhoto}
    alt="image" className='rounded-full w-[70px] h-[60px]'
  /></td>
           
            <td> {seller?.userRole}</td>
            <td>
              <SellerDetailsModal data={seller}/>
               {/* <button  className='btn text-white bg-[#3a9648]'>Details</button> */}
               </td>
          
         
          
        </tr>
        )
     }  
     </tbody>
  </table>
  
</div> 

        </div>
    );
};

export default AllSellerTable;