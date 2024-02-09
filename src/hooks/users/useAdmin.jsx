
"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";


const useAllUserData = () => {
    const { loading } = UserAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosPublic.get("/getUsers");
            console.log(res?.data);
            return res?.data;
            // const res = await axiosSecure.get(`/user/admin/${user?.email}`, {
            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem('token')}`
            //     }
            // })
            return res.data?.admin;
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;
