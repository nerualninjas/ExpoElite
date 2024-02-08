"use client"
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaDeleteLeft } from 'react-icons/fa6';
import useNotificationGet from "@/hooks/notifications/useNotificationGet";
import { formatTimeDifference } from '@/utils/timeUtils'
import { UserAuth } from "@/app/(auth)/context/AuthContext";


const Notification = () => {
    const {userNotification,notificationRefetch,notificationPending}=useNotificationGet()
    const axiosSecure = useAxiosSecure();
    const {user}=UserAuth();
  
    const handleReadUpdate= async(id)=>{
        // console.log("Read",id);
    
        await axiosSecure.patch(`/readNotification?email=${user?.email}&id=${id}`)
    }

const handleNotificationDelete =async (id)=>{

    await axiosSecure.delete(`/deleteNotification?email=${user?.email}&id=${id}`)
    notificationRefetch()
}


    return (
        <div className="container mt-5 mx-auto">
              <div className="bg-base-100 px-5 mx-auto max-w-3xl py-2 rounded-lg">
            <div className="flex items-center pr-3 justify-between">
                <h2 className="text-xl my-5">All Notifications</h2>
             
            </div>
            <ul className="bg-base-200  space-y-2 py-2 rounded-lg">
                {userNotification?.notificationData?.map((data) => <li key={data._id} className="hover:bg-gray-500 pl-2 p-1 flex justify-between items-center rounded-lg" >
                  <Link onClick={()=>handleReadUpdate(data._id)}  href={data.notificationPath}>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={data?.notifyUserPhoto}
                      width={20}
                      height={20}
                      alt="profile"
                      className="rounded-full mx-auto"
                    />
                    
                    {data.notificationText} 
                
                    </div>
                
                        <span className="text-[10px] text-rose-500">{formatTimeDifference(data.createdTime)} hours ago</span>

                    </Link>
                    <button onClick={()=>handleNotificationDelete(data?._id)} className="text-rose-500 px-4"><FaDeleteLeft/></button>
                </li>)}
            </ul>
        </div>
        </div>
    );
};

export default Notification;