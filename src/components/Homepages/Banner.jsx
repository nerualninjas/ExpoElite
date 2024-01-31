import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="w-full  mb-10  rounded-lg bg-gradient-to-r from-pink-200 to-pink-100  mx-auto">
        <div className="flex items-center justify-between">
          <div className="pl-10 ">
            <h2 className="font-semibold text-md md:text-3xl">10% Discount</h2>
            <p className="text-sm ">
              Get a discount on certain days and don&apos;t miss it
            </p>
            <button className="rounded-full bg-[#FF385D] text-white md:text-3xl">
              <MdArrowOutward />
            </button>
          </div>
          <div>
            <div className="flex   items-center justify-center">
              <Image
                width={400}
                height={100}
                className="w-full relative z-50  bottom-12 h-full"
                src={
                  "https://i.postimg.cc/dQTr9xpk/banner2-removebg-preview.png"
                }
                alt="picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
