"use client"
import { UserAuth } from '@/app/(auth)/context/AuthContext';
import Image from 'next/image';
import React from 'react';

const AdminDetails = () => {
    const { user } = UserAuth();
    return (
        <div>
            <div className="max-w-xs p-6 h-[230px]  rounded-md shadow-md flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-50 border-gray-200 mb-0 md:mb-5">
                <Image width={60} height={60} src={user?.photoURL} alt="admin" className="w-[70px] h-[70px] object-center  rounded-full border-rose-500 border-3 dark:bg-gray-500" />
                <div className="mt-6 mb-2 text-center">

                    <h2 className="text-lg font-semibold text-rose-500">{user?.displayName}</h2>
                    <h2 className="text-md font-semibold text-gray-700">{user?.email}</h2>
                    <h2 className="text-sm font-semibold text-rose-500">Admin</h2>
                </div>
                <div className="dark:text-gray-100">

                </div>
            </div>
        </div>
    );
};

export default AdminDetails;