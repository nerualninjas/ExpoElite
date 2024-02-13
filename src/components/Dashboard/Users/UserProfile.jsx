"use client"
import { UserAuth } from '@/app/(auth)/context/AuthContext';
import Image from 'next/image';
import React from 'react';

const UserProfile = () => {
    const { user } = UserAuth();
    console.log(user)
    return (
        <div>
            <div className="mt-4 p-16 rounded-md shadow-md flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-50 border-gray-200 mb-0 md:mb-5">
                <Image width={100} height={0} src={user?.photoURL} alt={user?.displayName} className="w-[100px] h-[100px] object-center  rounded-full border-rose-500 border-3 dark:bg-gray-500" />
                <div className="mt-6 mb-2 text-center">

                    <h2 className="text-lg font-semibold text-rose-500">{user?.displayName}</h2>
                    <h2 className="text-md font-semibold text-gray-700 pb-6">{user?.email}</h2>
                    {/* <h2 className="text-sm font-semibold text-rose-500">{user?.userRole}</h2> */}
                </div>
                <div className="dark:text-gray-100">

                </div>
            </div>
        </div>
    );
};

export default UserProfile;