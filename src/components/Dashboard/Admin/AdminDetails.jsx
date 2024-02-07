import Image from 'next/image';
import React from 'react';

const AdminDetails = () => {
    return (
        <div>
            <div className="max-w-xs p-6 h-[210px]  rounded-md shadow-md flex flex-col justify-center items-center bg-gradient-to-r from-[#F989B0] via-[#e49797] to-[#ffffff] dark:bg-gray-900 dark:text-gray-50 border-[#F43F5E] border-2">
                <Image width={60} height={60} src="https://source.unsplash.com/random/300x300/?1" alt="admin" className="w-[70px] h-[70px] object-center  rounded-full  dark:bg-gray-500" />
                <div className="mt-6 mb-2 text-center">

                    <h2 className="text-xl font-semibold tracki">Tahsin Tarannum Chowdhury</h2>
                    <h2 className="text-xl font-semibold text-gray-700">tahsin@gmail.com</h2>
                    <h2 className="text-xl font-semibold text-gray-600">Admin</h2>
                </div>
                <div className="dark:text-gray-100">

                </div>
            </div>
        </div>
    );
};

export default AdminDetails;