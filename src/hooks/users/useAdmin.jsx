"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { getLocalStorgeToken } from "@/utils/getToken";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";


const useAdmin = () => {
    const { user,loading } = UserAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isPending, refetch } = useQuery({
        queryKey: ["isAdmin"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/getIsAdmin/${user?.email}`,getLocalStorgeToken);
           
              return res?.data;
            },
    })

    return {isAdmin, isPending, refetch }
};

export default useAdmin;
