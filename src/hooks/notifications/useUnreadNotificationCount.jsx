import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";
import { useEffect, useState } from "react";

const useUnreadNotificationCount = () => {


    const { loading,user } = UserAuth();
    const axiosSecure = useAxiosSecure();
  

   
//  if(loading){
// return <>Loding...</>
//  }



   const {
    data: unreadNotification,
    isPending,
    refetch,
} = useQuery({
    queryKey: ["unreadNotification"],
    enabled: !loading,
    queryFn: async () => {
        if(!user){
            return <></>
        }
        const res = await axiosSecure.get(`/getUnreadNotificationCount?email=${user?.email}`);

        return res?.data?.unreadNotificationCount;
    },
});

    return {unreadNotification,isPending,refetch};
};

export default useUnreadNotificationCount;