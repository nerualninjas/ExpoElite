"use client"
import { UserAuth } from '@/app/(auth)/context/AuthContext';
import Image from 'next/image';
import React from 'react';

const SellerDetail = () => {
    const { user } = UserAuth();
    return (
        <div className='card p-3 bg-base-100  shadow-md rounded-lg px-5 py-8'>
            <div className=" justify-around items-center flex flex-col lg:flex-row ">
                
                <div className="radial-progress text-rose-500" style={{"--value":"100", "--size": "5rem", "--thickness": "4px"}} role="progressbar"><Image width={300} height={300} className='rounded-full p-1' src={user?.photoURL}  alt="image" /></div>

                <div className='mx-auto lg:ml-2 text-center'>
                    <h2 className='text-lg font-semibold '>{user?.displayName}</h2>
                    <p className='text-md font-semibold text-gray-600 '>{user?.email}</p>
                    <p className='text-md font-semibold text-red-400 '>Seller</p>
                </div>
            </div>
        </div>
    );
};

export default SellerDetail;