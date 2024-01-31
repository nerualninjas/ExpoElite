// import { UserAuth } from "@/app/(auth)/context/AuthContext";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./../useAxiosPublic";

// const usePropertyData = () => {
//   const { loading } = UserAuth();
//   const axiosPublic = useAxiosPublic();

//   const {
//     data: propertyData,
//     isPending,
//     refetch,
//   } = useQuery({
//     queryKey: ["propertySingleData"],
//     enabled: !loading,
//     queryFn: async () => {
//       const res = await axiosPublic.get(`/getProperty/${id}`);
//       console.log(res?.data);
//       return res?.data;
//     },
//   });
//  return { propertyData, isPending, refetch } ;
 
// };

// export default usePropertyData;





// "use client"
// import { useRouter } from 'next/navigation';

// import { UserAuth } from "@/app/(auth)/context/AuthContext";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./../useAxiosPublic";


// const usePropertyData = () => {
//   const { loading } = UserAuth();
//   const axiosPublic = useAxiosPublic();
//   const router = useRouter();
//   const propertyId = router.query.propertyId || null;
//   const {
//     data: propertyData,
//     isPending,
//     refetch,
//   } = useQuery({
//     queryKey: ["propertySingleData", router.query.propertyId],
   
//     enabled: !loading && router.query.propertyId, // Enable the query only if propertyId is available
//     queryFn: async () => {
//       try {
//         const res = await axiosPublic.get(`/getProperty/${propertyId}`);
//         console.log(res?.data);
//         return res?.data;
//       } catch (error) {
//         console.error("Error fetching property data:", error);
//         throw new Error("Error fetching property data");
//       }
//     },
//   });

//   return { propertyData, isPending, refetch };
// };

// export default usePropertyData;

// src/hooks/Propertys/usePropertyData.jsx
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../useAxiosPublic";

const usePropertyData = (propertyId) => {
  const { loading } = UserAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: propertyData,
    isError,  // Add this variable
    error,   // Add this variable
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["propertySingleData", propertyId],
    enabled: !loading && propertyId,
    queryFn: async () => {
      try {
        if (!propertyId) {
          console.log("Property ID not available.");
          return null;
        }

        const res = await axiosPublic.get(`/getProperty/${propertyId}`);
        console.log(res?.data);
        return res?.data;
      } catch (error) {
        console.error("Error fetching property data:", error);
        throw new Error("Error fetching property data");
      }
    },
  });
  console.log("isError:", isError); // Add this logging
  console.log("error:", error);     // Add this logging
  
  return { propertyData, isPending, refetch };
};

export default usePropertyData;