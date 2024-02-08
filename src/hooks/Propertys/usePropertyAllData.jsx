import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../useAxiosPublic";

const usePropertyAllData = () => {
  const { loading } = UserAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: propertyData,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["propertyData"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get("/getAllProperty");
      // console.log(res?.data);
      return res?.data;
    },
  });

  return { propertyData, isPending, refetch };
};

export default usePropertyAllData;
