"use client";
import Lottie from "lottie-react";
import Ex from "./ConUs.json";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const ContactBanner2 = () => {
  return (
    <div className="h-[500px]  md:h-[348px] bg-gradient-to-r from-pink-200 to-pink-50  rounded-lg flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start  justify-center pt-10 px-10 md:px-20">
        <h2 className="font-semibold text-rose-600 text-4xl">Contact Us</h2>
        <div className="w-36  md:w-52 border border-[#FF385D]  my-2"></div>
        <p className="my-5 md:my-0 text-sm  text-rose-900">
          Send us your thoughts! we are happy to hear from you. We are at your
          service!
        </p>
        <ul>
          <li className="flex items-center gap-6 text-2xl text-rose-600  md:my-2">
            <FaPhoneAlt className="hover:text-red-400" />
            <MdOutlineMail className="text-3xl hover:text-red-400" />
            <IoLocationSharp className="text-3xl hover:text-red-400" />
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 mt-0 relative bottom-12 md:bottom-[6rem]">
        <Lottie animationData={Ex} loop={true} />
      </div>
    </div>
  );
};

export default ContactBanner2;
