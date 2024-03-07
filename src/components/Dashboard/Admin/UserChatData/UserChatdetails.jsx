import Title2 from '@/components/shared/Title/Title2';
import Image from 'next/image';
import React from 'react';

const UserChatdetails = () => {
    return (
        <div>
            <div className="bg-white text-black p-4 m-4 rounded-xl">
                <Title2 title="Chat History Details " className=" mt-6" />
                <div className='bg-rose-200 rounded py-4 px-4 md:px-5 my-10 md:mx-10'>
                    <div className='flex flex-col md:flex-row justify-around items-center gap-4 my-6  p-4 bg-gray-100 rounded-lg'>
                        <Image src={"https://loamic-media.s3.us-east-2.amazonaws.com/1709713184189-rayhanalmim.jpg"} alt="property image" className='rounded-xl' width={80} height={80} />
                        <div >
                            <p><span className="font-bold">Name</span></p>
                        </div>
                        <div className='flex items-center'>
                            <p><span className="font-bold mr-2">Message</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UserChatdetails;