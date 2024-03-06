import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../useAxiosPublic";

const useAllPublishProperty = () => {

    const { loading } = UserAuth();
    const axiosPublic = useAxiosPublic();


    const {
        data: publishProperty,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["publishProperty"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosPublic.get(`/getAllPublishProperty`);
            // const res = await axiosPublic.get(`/getAllProperty`);
            console.log(res?.data);
            return res?.data;

        },
    });

    const AllPropertyLength = publishProperty?.length;
    return { publishProperty, AllPropertyLength, isPending, refetch };
};

export default useAllPublishProperty;
