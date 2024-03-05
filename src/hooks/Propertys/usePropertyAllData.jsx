import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../useAxiosPublic";

const usePropertyAllData = (page, limit) => {

  const { loading } = UserAuth();
  const axiosPublic = useAxiosPublic();
  const limitInt = parseInt(limit);
  console.log(page, limitInt);

  const {
    data: propertyData,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["property"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/getAllProperty?page=${page}&limit=${limitInt}`);
      // const res = await axiosPublic.get(`/getAllProperty`);
      console.log(res?.data);
      return res?.data;

    },
  });

  return { propertyData, isPending, refetch };
};

export default usePropertyAllData;
