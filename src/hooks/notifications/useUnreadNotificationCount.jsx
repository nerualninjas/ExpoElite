import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";
import { useEffect, useState } from "react";
// import Loading from "@/app/loading";

const useUnreadNotificationCount = () => {
    const { loading,user } = UserAuth();
    const axiosSecure = useAxiosSecure();
  
    useEffect(() => {
        console.log("User:", user);
    }, [user]);
   


   const {
    data:unreadNotification,
    isPending,
    refetch,
} = useQuery({
    queryKey: ["unreadNotification"],
    enabled: !loading ,
    queryFn: async () => {
        try {
            const res = await axiosSecure.get(`/getUnreadNotificationCount/${user?.email}`);
           
            return res?.data;
        } catch (error) {
            console.error("Error fetching unread notification count:", error);
            throw error;
        }
    },
});



    return {unreadNotification,isPending,refetch};
};

export default useUnreadNotificationCount;