import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../useAxiosPublic";

const usePropertyData = (propertyId) => {
  const { loading } = UserAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: propertySingleData,
    isPending,
    refetch,
  } = useQuery({
    // queryKey: ["propertySingleData"],
    queryKey: ["propertySingleData", propertyId], // Include propertyId in the queryKey
    // enabled: !loading,
    enabled: !loading && !!propertyId, // Enable the query only if propertyId is available
    queryFn: async () => {
      const res = await axiosPublic.get(`/getProperty/${propertyId}`);

      console.log(res?.data);
      return res?.data;
    },
  });

  return { propertySingleData, isPending, refetch };
};

export default usePropertyData;
