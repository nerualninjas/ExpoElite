import Image from 'next/image';
import React from 'react';

const AdminDetails = () => {
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md flex flex-col justify-center items-center bg-gradient-to-r from-[#F989B0] via-[#e49797] to-[#ffffff] dark:bg-gray-900 dark:text-gray-50 border-[#F43F5E] border-2">
	<Image width={50} height={50} src="https://source.unsplash.com/random/300x300/?1" alt="admin" className="w-[70px] h-[70px] object-center  rounded-full  dark:bg-gray-500" />
	<div className="mt-6 mb-2 text-center">
		
		<h2 className="text-xl font-semibold tracki">Tahsin Tarannum Chowdhury</h2>
        <h2 className="text-xl font-semibold text-gray-500">tahsin@gmail.com</h2>
	</div>
	<p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
</div>
        </div>
    );
};

export default AdminDetails;