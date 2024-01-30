import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../useAxiosPublic";

const usePropertyData = () => {
  const { loading } = UserAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: propertySingleData,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["propertySingleData"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get("/getProperty");
      console.log(res?.data);
      return res?.data;
    },
  });

  return { propertyData, isPending, refetch };
};

export default usePropertyData;