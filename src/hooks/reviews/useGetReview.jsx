import { UserAuth } from '@/app/(auth)/context/AuthContext';
import useAxiosSecure from '../useAxiosSecure';
import { useQuery } from "@tanstack/react-query"; // Import useQuery hook

const useGetReview = () => {
    const { user, loading } = UserAuth();
    const axiosSecure = useAxiosSecure()
    const {
        data: reviews,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["reviews"],
        enabled: !loading && user, 
        queryFn: async () => {
            const res = await axiosSecure.get(`/getReview/${user?.email}`);
            return res?.data;
        }
    });

    return { reviews, isLoading, refetch };
};

export default useGetReview;
