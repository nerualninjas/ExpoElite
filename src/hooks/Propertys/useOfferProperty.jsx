"use client";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { getLocalStorgeToken } from "@/utils/getToken";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";


const useOfferProperty = () => {
    const { user,loading } = UserAuth();
    const axiosSecure = useAxiosSecure();
let offerPropertyLength = 0;
    const { data: offerProperty, isPending, refetch } = useQuery({
        queryKey: ["offerProperty"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/getProductsBySpecialOffers',getLocalStorgeToken);
           
              return res?.data;
            },
    })

    offerPropertyLength = offerProperty?.length;

    return {offerProperty, offerPropertyLength,isPending, refetch }
};

export default useOfferProperty;
