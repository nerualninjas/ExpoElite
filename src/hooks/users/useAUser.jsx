
"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { getLocalStorgeToken } from "@/utils/getToken";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";


const useAUser = () => {
    const { user,loading } = UserAuth();
    const axiosSecure = useAxiosSecure();

    const { data: userInfoData, isPending, refetch } = useQuery({
        queryKey: ["userInfoData"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/getUser/${user?.email}`,getLocalStorgeToken);
            console.log(res?.data);
            return res?.data;
        }
    })

    return {userInfoData, isPending, refetch }
};

export default useAUser;
