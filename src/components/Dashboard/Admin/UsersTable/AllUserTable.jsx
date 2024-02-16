"use client"

import useAxiosSecure from '@/hooks/useAxiosSecure';
import useAllUserData from '@/hooks/users/useAllUserData';
import Image from 'next/image';
import React from 'react';


const BuyerTable = () => {
    const axiosSecure=useAxiosSecure();
    const { AllUserData, isPending, refetch } = useAllUserData();
    // const users = AllUserData?.filter(item => item?.userRole === 'user' && item?.roleStatus === 'pending');
   const users = AllUserData;
    const handleApprove = async (userId) => {
  

      try {
        // Update the user's role status to 'approved' and role to 'seller'
        await axiosSecure.patch(`/approveRole/${userId}`, {
          roleStatus: 'Approved',
          userRole: 'Seller'
        });
  
        
      } catch (error) {
        console.error('Error approving seller request:', error);
      }

    };

  
    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table mx-5 w-full mt-5 mb-10 pb-6">
            {/* head */}
            <thead>
              <tr className='text-center'>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Image</th>
                <th>Role</th>
                <th>Action</th>
               
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>
                    <Image
                      width={100}
                      height={100}
                      src={user?.userPhoto}
                      alt="image"
                      className="rounded-full w-[70px] h-[70px]"
                    />
                  </td>
                  <td>{user?.userRole}</td>
                  <td>
                    <button
                      className="btn text-white bg-[#3a9648]"
                      onClick={() => handleApprove(user._id)}
                      disabled={!(user.roleStatus === 'Pending' && user.userRole === 'user')}
                    >
                      Approve <br /> Request
                    </button>
                  </td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default BuyerTable;
  