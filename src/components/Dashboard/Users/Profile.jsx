"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useState } from 'react';
import axios from 'axios';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import useAUser from '@/hooks/users/useAUser';

const Profile = () => {
    const { user } = UserAuth();
    const [sellerRequestSent, setSellerRequestSent] = useState(false);
    const axiosSecure = useAxiosSecure();
    const {userInfoData} = useAUser();
    console.log(userInfoData)
    const handleSellerRequest = async (id) => {
        const data = { userRole: "Seller", roleStatus: "Pending" };
        await axiosSecure
        .patch(`/updateRole/:${id}`, )
        .then((res) => {
          console.log(res.data);
        });
        setSellerRequestSent(true);
    };

    return (
        <div className='w-full'>
            <div className='flex items-center gap-2 md:gap-10 bg-rose-100 md:m-20'>
                <div className='mx-4 my-10 md:m-10'>
                    <Image src={user?.photoURL} width={200} height={200} alt='profile' />
                </div>
                <div className='flex flex-col gap-2 items-start mt-10 text-2xl text-rose-700 font-semibold'>
                    <p>Name: <span className='font-normal text-black '>{user?.displayName}</span></p>
                    <h1>Email: <span className='font-normal text-black'>{user?.email}</span> </h1>
                    {/* <Link href={"/profile/edit"} className='border-2 border-rose-500 rounded-lg p-2 text-xl hover:bg-rose-500 hover:text-white'>Edit Profile</Link> */}
                    {/* Show the request seller button only if the request has not been sent */}
                    {!sellerRequestSent ? (
                        <button onClick={() => handleSellerRequest(userInfoData._id)}  className='btn text-white bg-[#3a9648]'>Request to Become Seller</button>
                    ) : (
                        <button className='btn text-white bg-[#d43a4c]'>Request Sent</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
