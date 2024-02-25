"use client"
import { UserAuth } from '@/app/(auth)/context/AuthContext';
import Image from 'next/image';
import React from 'react';

const UserProfile = () => {
    const { user } = UserAuth();
    console.log(user)
    return (
        <div>
            <div className="mt-4 md:ml-8 p-7 rounded-md shadow-md flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-50 border-gray-200 mb-0 md:mb-5">

                <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                    <div>
                        <Image width={70} height={70} src={user?.photoURL} alt={user?.displayName} className="w-[70px] h-[70px] object-center  rounded-full border-rose-400 border-3 dark:bg-gray-500" />
                    </div>

                    <div className="mt-6 mb-2 text-center md:text-start">

                        <h2 className="text-lg font-semibold text-rose-500">{user?.displayName}</h2>
                        <h2 className="text-md font-semibold text-gray-700">{user?.email}</h2>
                        {/* <h2 className="text-sm font-semibold text-rose-500">{user?.userRole}</h2> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;