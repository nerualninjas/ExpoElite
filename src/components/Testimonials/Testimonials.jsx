"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setPersons(data));
    AOS.init();
  }, []);

  return (
    <div className="text-center   my-5 py-5 ">
      <h1 className="text-4xl mt-10 font-bold text-sky-950">
        Our Testimonials
      </h1>
      <p className="mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-5 gap-4 place-items-center ">
        {persons.map((person, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center mx-4 rounded border-2 shadow-2xl my-5 w-full h-64"
            data-aos="fade-up"
            delay="2000"
          >
            <div className=" h-36 pt-8 text-sm bg-blue-100">
              <p className="text-center px-4">{person.description}</p>
            </div>
            <div className="absolute bottom-16">
              <Image
                className="w-20 h-20 object-cover rounded-full border-4 border-sky-100"
                src={person.image}
                width={200}
                height={200}
                alt="testimonials"
              />
            </div>
            <div className="text-center h-28 pt-16 text-sm">
              <p>{person.name}</p>
              {/* <h2>{person.designation}</h2> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
