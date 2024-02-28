"use client";
import { UserAuth } from '@/app/(auth)/context/AuthContext';

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../useAxiosPublic';

const useAllGetReviews = () => {
    const { loading } = UserAuth();
    const axiosPublic = useAxiosPublic();

    const {
        data: AllReviews,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["AllReviews"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllReviews');
            console.log(res?.data);
            return res?.data;
        }
        
    });

    return { AllReviews, isPending, refetch };
};

export default useAllGetReviews;
