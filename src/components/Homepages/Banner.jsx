import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <div>
      <div className="w-full  my-10  rounded-lg bg-gradient-to-r from-pink-200 to-pink-100  mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="ml-10 md:pl-0 md:mr-8 order-2 md:order-1 ">
            <h2 className="font-bold text-md  md:text-3xl"> 
            <span className="text-rose-500">Discover</span> a place <br/>
you&apos;ll love to live</h2>
            <p className="text-lg">
             
            </p>
            <Link href="/propertyinmap">
            <button className="rounded-full mt-2 bg-[#FF385D] text-white md:text-3xl">
              <MdArrowOutward />
            </button>
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex   items-center justify-center">
              <Image
                width={400}
                height={100}
                className="w-full relative z-10  bottom-12 h-full"
                src={
                  "https://i.ibb.co/qyM13FV/house-bg.png"
                }
                // src={
                //   "https://i.postimg.cc/dQTr9xpk/banner2-removebg-preview.png"
                // }
                alt="picture"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="pl-10 md:pl-0 md:mr-8 order-2 md:order-1">
            <h2 className="font-semibold text-md md:text-3xl">10% Discount</h2>
            <p className="text-base">
              Get a discount on certain days and don&apos;t miss it
            </p>
            <button className="rounded-full bg-[#FF385D] text-white md:text-3xl">
              <MdArrowOutward />
            </button>
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center justify-center">
              <Image
                width={400}
                height={100}
                className="w-full relative z-10 bottom-12 h-full"
                src={"https://i.ibb.co/qyM13FV/house-bg.png"}
                alt="picture"
              />
            </div>
          </div>
        </div> */}


      </div>
    </div>
  );
};

export default Banner;
