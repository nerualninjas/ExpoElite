import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../useAxiosPublic";

const useTotalProperty = () => {

  const { loading } = UserAuth();
  const axiosPublic = useAxiosPublic();
  

  const {
    data: propertyData,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["property"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get('/getTotalProperty');
      // console.log(res?.data);
      return res?.data;

    },
  });


  const  totalPropertyLength = propertyData?.length;
  console.log('totalPropertyLength',totalPropertyLength );
  return { propertyData, totalPropertyLength, isPending, refetch };
};

export default useTotalProperty;
