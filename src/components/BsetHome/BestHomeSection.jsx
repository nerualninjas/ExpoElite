"use client";
import {
  faBath,
  faBed,
  faCouch,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import usePropertyAllData from "./../../hooks/Propertys/usePropertyAllData";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

const BestHomeSection = () => {
 
  const [properties, setProperties] = useState([]);
  const [searchParams, setSearchParams] = useState({
 
    location: "",

  });

  // useEffect(() => {
  //   fetch("property.json")
  //     .then((res) => res.json())
  //     .then((data) => setProperties(data));
  //   AOS.init();
  // }, []);


  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { propertyData, isPending, refetch } = usePropertyAllData();
 

  useEffect(() => {
    setProperties(propertyData);
    refetch();
  }, [propertyData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleRangeChange = (e) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      range: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const locationValue = e.target.elements.location.value;
    console.log({ location: locationValue });
  };
  

  if (!properties || properties.length === 0) {
    return <div>House not found!</div>;
  }

  return (
    <div className="w-full py-12">
      <div className=" container mx-auto">
        <h3 className="text-center w-100 text-xl font-bold text-gray-900 p-4 ">
          Find your Best Home
        </h3>
        <hr className="w-1/4 mx-auto border-rose-400 border-2" />
        <br />

        <form onSubmit={handleSubmit} className="flex w-full  p-4">
          <div className="form-control w-full">
            <div className="input-group mx-auto  gap-2 flex flex-row">
              <input
                type="text"
                name="location"
                placeholder="Find by Location"
                className="input input-bordered   "
              />
              <button type="submit" className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 mt-2 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>

        <br />
        <div className="mx-auto mt-2 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {properties.slice(0, 6).map((property, index) => (
            <div
              key={index}
              className="  card bg-base-100  "
              data-aos="fade-up"
            >
              <figure className="p-1">
                <Image
                  width={300}
                  height={200}
                  src={property.image}
                  alt={property.propertyName}
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
                  <Link href={`/${property.id}`} > <button className="btn btn-1  btn-sm">view</button></Link>
                   
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

export default BestHomeSection;
