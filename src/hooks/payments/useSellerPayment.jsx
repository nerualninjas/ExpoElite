"use client"
import { getLocalStorgeToken } from "@/utils/getToken";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";
import { UserAuth } from "@/app/(auth)/context/AuthContext";

const useSellerPayment = () => {
    const { user,loading } =UserAuth();
    const axiosSecure = useAxiosSecure();
    console.log('email', user?.email);

    const { data: sellerPayment, isPending, refetch } = useQuery({
        queryKey: ["sellerPayment"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/getTotalPaymentSeller/${user?.email}`,getLocalStorgeToken);
           
              return res?.data;
            },
    })

   

    return {sellerPayment, isPending, refetch }
};

export default useSellerPayment;
