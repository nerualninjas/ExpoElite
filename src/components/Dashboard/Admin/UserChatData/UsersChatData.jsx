"use client"
import Title2 from '@/components/shared/Title/Title2';
import { faMessage  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import UserChatdetails from './UserChatdetails';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import Link from 'next/link';
import useAxiosSecure from '@/hooks/useAxiosSecure';


const UsersChatData = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


      const { data: packegeData, isPending, refetch } = useQuery({
        queryKey: ["chatData"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getAllconver`);
              console.log(res.data);
              return res?.data;
            },
    })

    const { data: userInfoData, isLoading: userLoading, refetch: userRefatch } = useQuery({
        queryKey: ["userInfoData"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/getUser/${user?.email}`,getLocalStorgeToken);
            console.log(res?.data);
            return res?.data;
        }
    })
    console.log(userInfoData);

    return (
        <div>
            <div className="bg-white text-black p-4 m-4 rounded-xl">
                <Title2 title="Chat History " className=" mt-6" />

                {
                    packegeData?.map((data, idx) => <div key={idx} className='bg-rose-200 rounded py-4 px-4 md:px-5 my-10 md:mx-10'>
                        <div className='flex flex-col md:flex-row justify-around items-center gap-4 my-6  p-4 bg-gray-100 rounded-lg'>
                            <Image src={"https://i.postimg.cc/sXV5P74Z/demo.avif"} alt="property image" className='rounded-xl' width={80} height={80} />
                            <div >
                                <p><span className="font-bold">{data.senderEmail}</span></p>
                            </div>
                            <div className='flex items-center'>
                                
                                <Link href={`/UserChatData/${data?._id}`}>
                                <p><span className="font-bold mr-2"><FontAwesomeIcon className='text-2xl text-rose-600' icon={faMessage} /></span></p>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div >
    );
};

export default UsersChatData;