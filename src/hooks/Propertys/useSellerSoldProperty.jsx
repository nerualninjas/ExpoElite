"use client"
import { getLocalStorgeToken } from "@/utils/getToken";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";
import { UserAuth } from "@/app/(auth)/context/AuthContext";

const useSellerSoldProperty = () => {
    const { user,loading } =UserAuth();
    const axiosSecure = useAxiosSecure();
let sellerSoldPropertyLength = 0;
    const { data: sellerSoldProperty, isPending, refetch } = useQuery({
        queryKey: ["sellerSoldProperty"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/getSelllerSoldProperty/${user?.email}`,);
           
              return res?.data;
            },
    })

    sellerSoldPropertyLength = sellerSoldProperty?.length;

    return {sellerSoldProperty, sellerSoldPropertyLength,isPending, refetch }
};

export default useSellerSoldProperty;
