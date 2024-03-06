"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import useAxiosPublic from "../useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";


const useSoldPropertyByMonth = () => {
    const { user,loading } = UserAuth();
    const axiosSecure = useAxiosSecure();

    const {
        data: soldProperty,
        isPending,
        refetch,
      } = useQuery({
        queryKey: ["soldProperty"],
        enabled: !loading,
        queryFn: async () => {
          const res = await axiosSecure.get(`/getSoldPropertyByMonth/${user?.email}`);
          console.log(res?.data);
          return res?.data;
        },
      });
    
    return { soldProperty, isPending, refetch };
};

export default useSoldPropertyByMonth;