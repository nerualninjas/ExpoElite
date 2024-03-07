
"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../useAxiosPublic";
import { getLocalStorgeToken } from '@/utils/getToken';

const useAllUserData = () => {
  const { loading } = UserAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: AllUserData,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["AllUserData"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get("/getUsers", getLocalStorgeToken);
      console.log(res?.data);
      return res?.data;
    },
  });
  const AllUserDataLength = AllUserData?.length;
  return { AllUserData, AllUserDataLength, isPending, refetch };
};

export default useAllUserData;
