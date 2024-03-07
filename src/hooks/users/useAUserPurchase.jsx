"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import useAxiosPublic from "../useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useAUserPurchase = () => {
    const { user,loading } = UserAuth();
    const axiosPublic = useAxiosPublic();

    const {
        data: MyPurchases,
        isPending,
        refetch,
      } = useQuery({
        queryKey: ["MyPurchases"],
        enabled: !loading, 
        queryFn: async () => {
          const res = await axiosPublic.get(`/showPayment/${user?.email}`);
          console.log(res?.data);
          return res?.data;
        },
      });
    
    return { MyPurchases, isPending, refetch };
};

export default useAUserPurchase;