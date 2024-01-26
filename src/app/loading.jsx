'use client';
import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
const Loading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="h-screen w-screen flex items-center justify-center">
            {
                loading ? <RiseLoader color="rgba(237, 95, 180, 0.83)" size={50} speedMultiplier={1}/> : <h1 className="text-3xl font-bold">Loading...</h1>
            }
        </div>
    );
};

export default Loading;