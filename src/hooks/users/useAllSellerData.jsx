"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../useAxiosPublic";
const useAllSellerData = () => {
  const { loading } = UserAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: AllSellerData,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["AllSellerData"],
    enabled: !loading, // Don't fetch data during SSR
    queryFn: async () => {
      const res = await axiosPublic.get("/getSellers");
      console.log(res?.data);
      return res?.data;
    },
  });
  const AllSellerDataLength = AllSellerData?.length;
  return { AllSellerData, AllSellerDataLength, isPending, refetch };
};

export default useAllSellerData;