"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import axios from 'axios';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import useAUser from '@/hooks/users/useAUser';
import useAdmin from '@/hooks/users/useAdmin';

const Profile = () => {
    const { user } = UserAuth();
    const [sellerRequestSent, setSellerRequestSent] = useState(false);
    const axiosSecure = useAxiosSecure();
    const { isAdmin } = useAdmin();
    const { userInfoData } = useAUser();

    const handleSellerRequest = async () => {
        const data = { userRole: "Seller", roleStatus: "Pending" };
        try {
            await axiosSecure.patch(`/updateRole/${userInfoData?._id}`, data);
            setSellerRequestSent(true);
        } catch (error) {
            console.error("Error updating user role:", error);
        }
    };

    return (
        <div className='w-full'>
            <div className='flex items-center gap-2 md:gap-10 bg-rose-100 md:m-20'>
                <div className='mx-4 my-10 md:m-10'>
                    <Image src={user?.photoURL} width={200} height={200} alt='profile' />
                </div>
                <div className='flex flex-col gap-2 items-start mt-10 text-2xl text-rose-700 font-semibold'>
                    <p>Name: <span className='font-normal text-black'>{user?.displayName}</span></p>
                    <h1>Email: <span className='font-normal text-black'>{user?.email}</span> </h1>
                    {/* Render admin button if user is admin */}
                    {isAdmin && (
                        <Link href="/allUsers" className='border-2 rounded-xl text-lg p-2 text-white bg-[#3a9648] hover:bg-white hover:text-[#3a9648] '>Check All users</Link>
                        // <button className='btn text-white bg-[#3a9648]'>Admin</button>
                    )}
                    {/* Render request seller button if request has not been sent */}
                    {!sellerRequestSent && !isAdmin && (
                        <button onClick={handleSellerRequest} className='border-2 rounded-xl text-lg p-2 text-white bg-[#3a9648] hover:bg-white hover:text-[#3a9648]'>Request to Become Seller</button>
                    )}
                    {/* Render "Request Sent" button if request has been sent */}
                    {sellerRequestSent && (
                        <button className='border-2 rounded-xl text-lg p-2 text-white bg-rose-500 hover:bg-white hover:text-rose-500'>Request Sent</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
