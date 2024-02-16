"use client"

const { useEffect } = require("react");
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";

const PrivateRoutes = ({children})=>{
const router = useRouter()

const {user,loading}=UserAuth();

if(loading){
    return <Loading/>
}

useEffect(()=>{
    if(!loading && !user){
        router.replace('/login');
    }
},[loading,user]);



return loading ? null: children;
};


export default PrivateRoutes;