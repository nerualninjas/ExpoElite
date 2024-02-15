import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../useAxiosSecure';

const useSoldPropertyData = ({ soldPropertyId }) => {
    const { loading } = UserAuth();
    const axiosPublic = useAxiosSecure();
    console.log(propertyId);

    const {
        data: soldPropertyData,
        isPending,
        refetch,
    } = useQuery({
        // queryKey: ["soldPropertyData"],
        queryKey: ["soldPropertyData", soldPropertyId], // Include propertyId in the queryKey
        // enabled: !loading,
        enabled: !loading && !!soldPropertyId, // Enable the query only if propertyId is available
        queryFn: async () => {
            const res = await axiosPublic.get(`/getPayments/${soldPropertyId}`);

            // console.log(res?.data);
            return res?.data;
        },
    });

    return { soldPropertyData, isPending, refetch };
};

export default useSoldPropertyData;