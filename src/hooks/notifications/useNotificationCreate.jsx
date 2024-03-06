
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


// notification uses 
// import useNotification from "@/hooks/notifications/useNotificationCreate";
// const { notificationPost } = useNotification()


 // notifiacation add  start-------------------
// const data = {
// userEmail: email,
// notificationData: [{
//     notificationText: "user registration success",
//     notifyUserPhoto: photo,
//     notificationPath:"/profile",
//     notificationStatus: "unread"
// }]
// }
// notificationPost(data)

  //notification end----------------