import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <div>
      <div className="w-full h-[300px] my-10 rounded-lg bg-gradient-to-r from-pink-200 to-pink-100  mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <h2 className="font-semibold text-[#FF385D] text-md md:text-3xl">About us</h2>
            <p className="text-sm ">
            ExpoElite emerged from a shared vision of creating a space where every property transaction is an experience worth cherishing.
            </p>
            {/* <button className="rounded-full bg-[#FF385D] text-white md:text-3xl">
              <MdArrowOutward />
            </button> */}
          </div>
         
          
          </div>
        </div>
     
  );
};

export default AboutBanner;
