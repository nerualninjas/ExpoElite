"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import useAxiosSecure from '@/hooks/useAxiosSecure';
import useAUser from '@/hooks/users/useAUser';
import useAdmin from '@/hooks/users/useAdmin';
import PremiumSellerCard from '../Seller/PremiumSeller/PremiumSellerCard';
import FreeSellerCard from '../Seller/PremiumSeller/FreeSellerCard';
import PremiumSeller from '../Seller/PremiumSeller/PremiumSeller';
import SellerDetailsModal from'@/components/Dashboard/Admin/sellerTable/SellerDetailsModal'

const Profile = () => {
    const { user } = UserAuth();
    const [sellerRequestSent, setSellerRequestSent] = useState(false);
    const axiosSecure = useAxiosSecure();
    const { isAdmin } = useAdmin();
    const { userInfoData } = useAUser();

 

    // const handleSellerRequest = async (id) => {
    //     console.log(id)
    //     const data = {roleStatus: "Pending" };
    //     try {
    //         await axiosSecure.patch(`/updateRole/${id}`, data);
    //         setSellerRequestSent(true);
    //     } catch (error) {
    //         console.error("Error updating user role:", error);
    //     }

    // };

    return (
        <div className='w-full'>
            <div className='flex items-center gap-2 md:gap-10 bg-gradient-to-r from-rose-200 to-rose-100 md:m-20'>
                <div className='mx-4 my-5 md:m-10'>
                    <Image src={user?.photoURL} width={200} height={200} alt='profile' />
                </div>
                <div className='flex pb-10 flex-col gap-2 items-start mt-10 text-2xl text-rose-700 font-semibold'>
                    <p>Name: <span className='font-normal text-black'>{user?.displayName}</span></p>
                    <p>Role: <span className='font-normal text-black'>{userInfoData?.userRole}</span></p>
                    <h1>Email: <span className='font-normal text-black'>{user?.email}</span> </h1>
                    {/* Render admin button if user is admin */}
                    {isAdmin && (
                        <Link href="/allUsers" className='border-2 rounded-xl text-lg p-2 text-white bg-[#3a9648] hover:bg-white hover:text-[#3a9648] '>Check All users</Link>
                        // <button className='btn text-white bg-[#3a9648]'>Admin</button>
                    )}
                    {/* Render request seller button if request has not been sent */}
                    {/* {!sellerRequestSent && !isAdmin && (
                        <button onClick={()=>handleSellerRequest(userInfoData?._id)} className='border-2 rounded-xl text-lg p-2 text-white bg-[#3a9648] hover:bg-white hover:text-[#3a9648]'>Request to Become Seller</button>
                    )} */}
                    {/* Render "Request Sent" button if request has been sent */}
                    {/* {sellerRequestSent && (
                        <button className='border-2 rounded-xl text-lg p-2 text-white bg-rose-500 hover:bg-white hover:text-rose-500'>Request Sent</button>
                    )} */}

                    {!isAdmin && <a href="#seller" className="border-2 rounded-xl text-lg p-2 text-white bg-[#3a9648] hover:bg-white hover:text-[#3a9648] "> Become a seller </a>}
                </div>
                <div className="p-2"><SellerDetailsModal data={userInfoData} />  </div>
            </div>
                 {/* seller card   */}
                 <div id="seller" className="md:flex gap-4 justify-center">
                   {!isAdmin &&  <PremiumSeller />}
                
                 </div>
        </div>
    );
};

export default Profile;