"use client"
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";

const useAllAppointments = () => {
  const { loading } = UserAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: appointmentData,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["appointmentData"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/getAppointments");
      // console.log(res?.data);
      return res?.data;
    },
  });

  return { appointmentData, isPending, refetch };
};

export default useAllAppointments;
