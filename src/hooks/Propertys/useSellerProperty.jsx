"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { getLocalStorgeToken } from "@/utils/getToken";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";


const useSellerProperty = () => {
    const { user,loading } = UserAuth();
    const axiosSecure = useAxiosSecure();
let sellerPropertyLength = 0;
    const { data: sellerProperty, isPending, refetch } = useQuery({
        queryKey: ["sellerProperty"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/getSellerPropertys/${user?.email}`,getLocalStorgeToken);
           
              return res?.data;
            },
    })

    sellerPropertyLength = sellerProperty?.length;

    return {sellerProperty, sellerPropertyLength,isPending, refetch }
};

export default useSellerProperty;
