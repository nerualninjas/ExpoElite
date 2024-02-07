


import useAxiosPublic from '@/hooks/useAxiosPublic';
import React from 'react';

const useNotification =  () => {
   
    const axiosPublic = useAxiosPublic();

const notificationPost = async (data)=>{
    console.log("Notification Log",data);
    await axiosPublic.post("/createNotification",data).then((res)=>console.log(res?.data))

}

    return {notificationPost}
};

export default useNotification;