"use client"
import useNotificationGet from "@/hooks/notifications/useNotificationGet";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { formatTimeDifference } from '@/utils/timeUtils'
import { UserAuth } from "@/app/(auth)/context/AuthContext";

const NotificationBar = ({ open }) => {
const {userNotification,notificationRefetch,notificationPending}=useNotificationGet()
const axiosSecure = useAxiosSecure();
 const {user}=UserAuth();
const notificationData= userNotification?.notificationData;
const notificalentgh = notificationData?.length;


const handleReadUpdate= async(id)=>{
    console.log("Read",id);

    await axiosSecure.patch(`/readNotification?email=${user?.email}&id=${id}`)
}

    return (
        <div className="bg-base-200 pl-5 w-full md:w-[20vw] py-2 rounded-lg">
            <div className="flex items-center pr-3 justify-between">
                <h2 className="text-xl">Notifications</h2>
               <Link href="/notification"> <button className="btn btn-sm btn-circle rounded-full text-center   "><HiOutlineDotsHorizontal /></button></Link>
            </div>
            <ul className="bg-base-200  space-y-2 py-2 rounded-lg" onMouseLeave={() => open(false)}>
                {notificationData?.slice(0,5).map((data) => <li  key={data._id} className={data.notificationStatus==="unread" ? "bg-base-300 hover:bg-gray-500  p-2 rounded-lg ":"hover:bg-gray-500 p-2 rounded-lg"} >
                    <Link onClick={()=>handleReadUpdate(data._id)} href={data.notificationPath}>
                        
                   
                 <div className="flex gap-2 ">
                 <Image
                      src={data?.notifyUserPhoto}
                      width={20}
                      height={20}
                      alt="profile"
                      className="rounded-full"
                    />
                    
                   <p className="text-[14px]"> {data.notificationText} </p>
                 </div>
                
                    <div className="flex gap-2 items-center justify-between">
                        <span className="text-[10px] text-rose-500">{formatTimeDifference(data.createdTime)}</span>
                {data?.notificationStatus === "unread" &&  <span className="text-[10px] text-rose-500">unread</span>}
                    </div>

                    </Link>
                </li>)}
  <Link href="/notification">
  <button className="p-1 btn btn-outline btn-sm text-center">See More</button>
  </Link>
            </ul>
        </div>
        
        );

}


export default NotificationBar;