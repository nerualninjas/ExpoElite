"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import useAxiosPublic from "../useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useAUserLike = () => {
    const { user,loading } = UserAuth();
    const axiosPublic = useAxiosPublic();

    const {
        data: MyLikes,
        isPending,
        refetch,
      } = useQuery({
        queryKey: ["MyLikes"],
        enabled: !loading,
        queryFn: async () => {
          const res = await axiosPublic.get(`/getUserLikeCount/${user?.email}`);
          console.log(res?.data);
          return res?.data;
        },
      });
    
    return { MyLikes, isPending, refetch };
};

export default useAUserLike;