'use client'
import Lottie from "lottie-react";
import Ex from "./Email.json";
import Title2 from "../shared/Title/Title2";

const ContactForm = () => {
    return (
        <div className="my-20 ">
            <div className="text-center">
                <Title2 title="Get In Touch" heading="Send us your thoughts!" />
                {/* <h3 className="text-4xl font-extrabold text-rose-600">Get in Touch</h3>
                <p>Send us your thoughts!</p> */}
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="w-1/2">
                    <Lottie animationData={Ex} loop={true} />
                </div>
                <div className="w-1/2">
                    <form className="py-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label className="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" className=" mt-2 py-3 px-3 rounded bg-white text-rose-700 border-2 border-rose-400 font-semibold focus:border-rose-900 focus:outline-none" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label className="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className=" mt-2 py-3 px-3 rounded bg-white text-rose-700 border-2 border-rose-400 font-semibold focus:border-rose-900 focus:outline-none" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <label className="hidden">Number</label>
                            <input type="tel" name="tel" id="tel" placeholder="Mobile Number" className=" mt-2 py-3 px-3 rounded bg-white text-rose-700 border-2 border-rose-400 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label className="hidden">Number</label>
                            <textarea placeholder="Message" className=" mt-2 py-3 px-3 rounded bg-white  text-rose-700 border-2 border-rose-400 font-semibold focus:border-rose-500 focus:outline-none" />
                        </div>

                        <button type="submit" className="w-full bg-rose-500 hover:bg-rose-100  text-white hover:text-rose-700 font-bold py-3 px-6 rounded-lg mt-3  transition ease-in-out duration-300">
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactForm;