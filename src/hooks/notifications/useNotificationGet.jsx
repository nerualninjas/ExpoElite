import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";


const useNotificationGet = () => {


    const { loading,user } = UserAuth();
    const axiosSecure = useAxiosSecure();
   
    const {
      data: userNotification,
      isPending: notificationPending,
      refetch: notificationRefetch,
    } = useQuery({
     
      queryKey: ["userNotification"], 
      // enabled: !loading,
      enabled: !loading ,
      queryFn: async () => {
        const res = await axiosSecure.get(`/getUserNotification/${user?.email}`);
  
        // console.log(res?.data);
        return res?.data;
      },
    });

    return {userNotification,notificationRefetch,notificationPending};
};

export default useNotificationGet;