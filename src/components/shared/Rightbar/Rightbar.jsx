import Location from "@/components/Location/Location";
import React from "react";

const Rightbar = () => {
  return (
    <div className="w-64 hidden lg:block fixed -bottom-16 end-0 bg-pink-50 shadow-2xl min-h-[100vh] flex-end ">
      <Location />
    </div>
  );
};
export default Rightbar;
