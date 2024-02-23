"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Title from "../shared/Title/Tilte";
import useAllGetReviews from "@/hooks/reviews/useAllGetReviews";

const Testimonials = () => {
  const { AllReviews } = useAllGetReviews();

  console.log(AllReviews)
  const DisplayedReviews = AllReviews ? AllReviews.slice(0, 4) : [];
  return (
    <div className="text-center   my-5 py-5 text-blue-950 font-semibold ">
      <Title title="Clients Reviews" heading="See what our clients have to say about their experience." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-5 gap-4 place-items-center " >
        {DisplayedReviews?.map((person, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center mx-4 rounded border-2 shadow-2xl my-5 w-full h-64 "

          >
            <div className="">
              <div className="  h-32 pt-8 text-sm bg-blue-100">
                <p className="text-center px-4">{person?.review}</p>
              </div>

              <div className="text-center h-32 pt-14 text-sm">
                <p>{person?.userName}</p>
                <p>{person?.userEmail}</p>
                {/* <h2>{person.designation}</h2> */}
              </div>
            </div>
            <div className="absolute z-10">
              <Image
                className="w-20 h-20 object-cover rounded-full border-4 border-sky-200"
                src={person?.userPhoto}
                width={200}
                height={200}
                alt="testimonials"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
