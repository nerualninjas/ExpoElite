"use client";
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
    <div  >
    {loading ? (
        <RiseLoader
        
          color="rgb(220, 20, 60)"
          size={35}
          speedMultiplier={1}
        />
      ) : (
        <h1 className="text-3xl font-bold text-base-300">Loading...</h1>
      )}
    </div>
    </div>
  );
};

export default Loading;
