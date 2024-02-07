
import React from 'react';
import Link from "next/link";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaDeleteLeft } from 'react-icons/fa6';
const Notification = () => {

    const notificationData = [
        { notificationText: "User Created", notificationPath: '/', createdTime: "10.44" },
        { notificationText: "Product added", notificationPath: '/', createdTime: "10.44" },
        { notificationText: "New Message", notificationPath: '/', createdTime: "10.44" },
        { notificationText: "Ok", notificationPath: '/', createdTime: "10.44" }
    ]
    return (
        <div className="container mt-5 mx-auto">
              <div className="bg-base-100 px-5 mx-auto max-w-3xl py-2 rounded-lg">
            <div className="flex items-center pr-3 justify-between">
                <h2 className="text-xl my-5">All Notifications</h2>
               
            </div>
            <ul className="bg-base-200  space-y-2 py-2 rounded-lg">
                {notificationData?.map((data) => <li key={data.notificationText} className="hover:bg-gray-500 pl-2 p-1 flex justify-between items-center rounded-lg" >
                    <Link href={data.notificationPath}>{data.notificationText} <br />
                        <span className="text-[10px] text-rose-500">{data.createdTime} hours ago</span>

                    </Link>
                    <button className="text-rose-500 px-4"><FaDeleteLeft/></button>
                </li>)}
            </ul>
        </div>
        </div>
    );
};

export default Notification;