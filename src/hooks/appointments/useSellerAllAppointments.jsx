"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";
import { getLocalStorgeToken } from "@/utils/getToken";

const useSellerAllAppointments = () => {
  const { loading, user } = UserAuth();
  const axiosSecure = useAxiosSecure();
  const email= user?.email;
  const {
    data: sellerAppointmentData,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["sellerAppointmentData"], // Include email in the queryKey
    enabled: !loading,
    queryFn: async () => {
      if (!email) {
        throw new Error("User email is required.");
      }

      // Use the authenticated user's email in the query
      const res = await axiosSecure.get(`/getAppointmentsSeller/${user?.email}`,getLocalStorgeToken);
      return res?.data;
    },
  });

  return { sellerAppointmentData, isPending, refetch };
};

export default useSellerAllAppointments;