"use client";

import { useState } from "react";
import Image from "next/image";

const FQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="my-10 pb-10 mx-auto w-full md:w-4/5">
      <div>
        <h1 className="text-center text-2xl lg:text-3xl font-bold text-[#212121] mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-[#FF385D] font-semibold">
          Your Comprehensive Guide to Property Transactions on ExpoElite
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto py-10 px-4 gap-5 rounded">
          <div className="w-full md:w-1/2 mt-5 md:mt-1">
            <Image
              width={400}
              height={300}
              className="w-full"
              src={"https://i.postimg.cc/kXwtfPJc/faq3-removebg-preview.png"}
              alt="picture"
            />
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-1">
            <div className="space-y-2">
              <div>
                {/* Accordion Item 1 */}
                <div>
                  <h2 className="text-gray-700 font-medium">
                    <button
                      type="button"
                      onClick={() => handleAccordionClick(0)}
                      className="flex items-center justify-between w-full p-3 border-b border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      aria-expanded={activeIndex === 0}
                    >
                      <span>What is ExpoElite?</span>
                      <svg
                        className={`w-4 h-4 transform ${
                          activeIndex === 0 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 10 6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div className={`p-3 ${activeIndex === 0 ? "" : "hidden"}`}>
                    <p className="text-gray-500 dark:text-gray-400">
                      ExpoElite aims to establish a property selling and
                      exhibition platform . The platform is designed to serve
                      three key user groups: individuals looking to buy
                      property, developing companies, and rental users.
                    </p>
                  </div>
                </div>

                {/* Accordion Item 2 */}
                <div>
                  <h2 className="text-gray-700 font-medium">
                    <button
                      type="button"
                      onClick={() => handleAccordionClick(1)}
                      className="flex items-center justify-between w-full p-3 border-b border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      aria-expanded={activeIndex === 1}
                    >
                      <span>Is ExpoElite only for residential properties?</span>
                      <svg
                        className={`w-4 h-4 transform ${
                          activeIndex === 1 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 10 6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div className={`p-3 ${activeIndex === 1 ? "" : "hidden"}`}>
                    <p className="text-gray-500 dark:text-gray-400">
                      ExpoElite is a versatile platform, and you can list both
                      residential and commercial properties. Whether it&apos;s a
                      home, apartment, office space, or retail property, you can
                      showcase it on ExpoElite.
                    </p>
                  </div>
                </div>

                {/* Accordion Item 3 */}
                <div>
                  <h2 className="text-gray-700 font-medium">
                    <button
                      type="button"
                      onClick={() => handleAccordionClick(2)}
                      className="flex items-center justify-between w-full p-3 border-b border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      aria-expanded={activeIndex === 2}
                    >
                      <span>How do I search for properties on ExpoElite?</span>
                      <svg
                        className={`w-4 h-4 transform ${
                          activeIndex === 2 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 10 6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div className={`p-3 ${activeIndex === 2 ? "" : "hidden"}`}>
                    <p className="text-gray-500 dark:text-gray-400">
                      To search for properties, use the search bar on our
                      homepage. You can filter results based on location,
                      property type, price range, and other criteria. Explore
                      the available listings to find properties that match your
                      preferences.
                    </p>
                  </div>
                </div>

                {/* Accordion Item 4 */}
                <div>
                  <h2 className="text-gray-700 font-medium">
                    <button
                      type="button"
                      onClick={() => handleAccordionClick(3)}
                      className="flex items-center justify-between w-full p-3 border-b border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      aria-expanded={activeIndex === 3}
                    >
                      <span>what is the transaction process on ExpoElite?</span>
                      <svg
                        className={`w-4 h-4 transform ${
                          activeIndex === 3 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 10 6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div className={`p-3 ${activeIndex === 3 ? "" : "hidden"}`}>
                    <p className="text-gray-500 dark:text-gray-400">
                      ExpoElite prioritizes the security of transactions. We
                      recommend using secure payment methods, and our platform
                      incorporates encryption and other security measures to
                      protect your financial information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FQ;
