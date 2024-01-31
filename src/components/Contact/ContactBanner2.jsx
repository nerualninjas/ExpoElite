"use client";
import Lottie from "lottie-react";
import ConUs from "./ConUs.json";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ContactBanner2 = () => {

    return (
        <div className="bg-gradient-to-r from-pink-200 to-pink-50 md:h-96 rounded-lg flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center pt-10 px-6 md:px-10 ">
                <h2 className="font-extrabold text-rose-600 text-4xl ">
                    Contact Us
                </h2>
                <div className="w-28 md:w-52 border border-[#FF385D] my-2"></div>
                <p className="my-5 md:my-0 text-sm md:text-base lg:text-lg text-rose-900">
                    Send us your thoughts! We are happy to hear from you. We are at your
                    service!
                </p>
                <ul>
                    <li className="flex items-center gap-6 text-xl md:text-2xl lg:text-3xl text-rose-600 md:my-2">
                        <FaPhoneAlt className="hover:text-red-400" />
                        <MdOutlineMail className="text-2xl lg:text-3xl hover:text-red-400" />
                        <IoLocationSharp className="text-2xl lg:text-3xl hover:text-red-400" />
                    </li>
                </ul>
            </div>
            <div className="w-full md:w-1/2 mt-0 md:-translate-y-16">
                <Lottie animationData={ConUs} loop={true} />
            </div>
        </div>
    );


export default ContactBanner2;
