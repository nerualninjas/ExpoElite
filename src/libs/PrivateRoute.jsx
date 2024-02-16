"use client";

import { useEffect } from "react";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";

const PrivateRoutes = ({ children }) => {
  const router = useRouter();
  const { user, loading } = UserAuth();

 

  useEffect(() => {
    const redirectToLogin = async () => {
      try {
        if (!loading && !user) {
          await router.replace("/login");
        }
      } catch (error) {
        console.error("Error redirecting to login:", error);
        // Handle the error as per your application's requirements
      }
    };

    redirectToLogin();
  }, [loading, user, router]);

  if (loading) {
    return <Loading />;
  }

  return loading ? null : children;
};

export default PrivateRoutes;
