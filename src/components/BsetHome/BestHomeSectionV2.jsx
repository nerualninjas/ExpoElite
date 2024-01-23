"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBed,
  faBath,
  faCouch,
} from "@fortawesome/free-solid-svg-icons";
import { FaLocationArrow } from "react-icons/fa";

const BestHomeSectionV2 = ({ house }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("property.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
      AOS.init();
  }, []);

  if (!properties || properties.length === 0) {
    return <div>House not found!</div>;
  }

  return (
    <div className="w-full ">
      <div className=" container mx-auto ">
        <h3 className=" ">
          <span className="heading  text-left w-100 text-xl font-bold text-gray-900">
            Find your Best Home
          </span>
        </h3>
        <br />
        <form className="flex gap-4">
          <div className="">
            <p>Location </p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm md:input-md w-full max-w-xs"
            />
          </div>
          <div className="">
            <p>Type </p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm md:input-md w-full max-w-xs"
            />
          </div>
          <div className="pt-6">
            <button className="btn md:btn-md btn-sm btn-1">Search</button>
          </div>
        </form>
        <br />

        <div className="mx-auto grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {properties.map((property, index) => (
            <div key={index} className="  card bg-base-100  " data-aos="fade-up">
              <figure className="p-3">
                <Image
                width={300}
                height={200}
                  src={property.imageUrl}
                  alt={property.title}
                  className="rounded-xl "
                />
              </figure>

<span> </span>
              <div className=" px-3   ">
                <h2 className="card-title font-bold text-2xl text-[#2C2946] text-left py-2">
                  ${property?.price}
                </h2>

                <div className="flex text-xs  w-full    content-stretch justify-between pb-2">
                  <div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faBed}
                        className="text-gray-500 mr-1"
                      />
                      <span className="font-bold"> {property.bedrooms} </span>
                    </div>
                    <br />
                    Bedrooms
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faBath}
                        className="text-gray-500 mr-1"
                      />
                      <span className="font-bold"> {property.bathrooms} </span>
                    </div>
                    <br />
                    Bathrooms
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faCouch}
                        className="text-gray-500 mr-1"
                      />
                      <span className="font-bold"> {property.livingRoom} </span>
                    </div>
                    <br />
                    LivingRoom
                  </div>
                </div>

                <hr className="py-2" />
                <div className="card-actions py-2 flex justify-between w-full">
                  <div className="text-xs w-2/4">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-gray-500 mr-1"
                      />
                      {property.location}
                    </div>
                  </div>
                  <div className="w-1/4">
                    <button className="btn btn-1  btn-sm">view</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestHomeSectionV2;
