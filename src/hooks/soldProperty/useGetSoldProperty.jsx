import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";


const useGetSoldProperty = () => {
    const { loading } = UserAuth();
    const axiosSecure = useAxiosSecure();

    const {
        data: soldPropertyData,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["soldPropertyData"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get("/getPayments");
            // console.log(res?.data);
            return res?.data;
        },
    });
    const soldPropertyLength= soldPropertyData?.length;

    return { soldPropertyData,soldPropertyLength, isPending, refetch };
    

};

export default useGetSoldProperty;