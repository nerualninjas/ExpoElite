"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import useAxiosPublic from "../useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useAUserComment = () => {
    const { user,loading } = UserAuth();
    const axiosPublic = useAxiosPublic();

    const {
        data: MyComments,
        isPending,
        refetch,
      } = useQuery({
        queryKey: ["MyComments"],
        enabled: !loading,
        queryFn: async () => {
          const res = await axiosPublic.get(`/getUserCommentCount/${user?.email}`);
          console.log(res?.data);
          return res?.data;
        },
      });
    
    return { MyComments, isPending, refetch };
};

export default useAUserComment;