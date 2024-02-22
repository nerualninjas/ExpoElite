"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { getLocalStorgeToken } from "@/utils/getToken";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";


const useSeller = () => {
    const { user,loading } = UserAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isSeller, isPending, refetch } = useQuery({
        queryKey: ["isSeller"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/getIsSeller/${user?.email}`,getLocalStorgeToken);
           
              return res?.data;
            },
    })

    return {isSeller, isPending, refetch }
};

export default useSeller;
