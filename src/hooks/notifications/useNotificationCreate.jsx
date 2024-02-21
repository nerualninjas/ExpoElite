
import useUnreadNotificationCount from "@/hooks/notifications/useUnreadNotificationCount";

import useAxiosPublic from '@/hooks/useAxiosPublic';
import React from 'react';

const useNotification =  () => {
    const {refetch}=useUnreadNotificationCount()
    const axiosPublic = useAxiosPublic();

const notificationPost = async (data)=>{
    console.log("Notification Log",data);

   
    await axiosPublic.post("/createNotification",data).then((res)=>{
        if(res?.data){
        refetch()
    }})

}

    return {notificationPost}
};

export default useNotification;