import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";


const useGetSellerSoldProperty = () => {
    const { loading } = UserAuth();
    const axiosSecure = useAxiosSecure();

    const {
        data: sellerSoldPropertyData,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["sellerSoldPropertyData"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get("/getSelllerSoldProperty");
            // console.log(res?.data);
            return res?.data;
        },
    });

    return { sellerSoldPropertyData, isPending, refetch };

};

export default useGetSellerSoldProperty;