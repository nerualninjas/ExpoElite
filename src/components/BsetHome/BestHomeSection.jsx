"use client";
import {
  faBath,
  faBed,
  faCouch,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import usePropertyAllData from "./../../hooks/Propertys/usePropertyAllData";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useSearchProperty from "@/hooks/Propertys/useSearchProperty";

const BestHomeSection = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { propertyData, isPending, refetch } = usePropertyAllData();

  const [properties, setProperties] = useState([]);
  const [searchParams, setSearchParams] = useState({
    title: "",
    location: "",
    type: "",
    range: 40,
  });
  // useEffect(() => {
  //   fetch("property.json")
  //     .then((res) => res.json())
  //     .then((data) => setProperties(data));
  //   AOS.init();
  // }, []);

  useEffect(() => {
    setProperties(propertyData);
    refetch();
  }, [propertyData, refetch]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
     // Add your search logic here using searchParams
     const res = await axiosPublic.get(`/searchAndSort?location=${searchParams.location}`)
     console.log(res.data);
     setProperties(res.data);
  };

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

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-3 lg:grid-cols-5 gap-4 w-full"
        >
          <div className="w-2/12">
            <p>Title </p>

            <input
              type="text"
              name="title"
              placeholder="Type here"
              value={searchParams.title}
              onChange={handleInputChange}
              className="input input-bordered w-[150px]   "
            />
          </div>
          <div className="w-2/12">
            <p>Location </p>
            <input
              type="text"
              name="location"
              placeholder="Type here"
              value={searchParams.location}
              onChange={handleInputChange}
              className="input input-bordered w-[150px]  "
            />
          </div>
          <div className="w-2/12">
            <p>Type </p>
            <input
              type="text"
              name="type"
              placeholder="Type here"
              value={searchParams.type}
              onChange={handleInputChange}
              className="input input-bordered w-[150px]   "
            />
          </div>

          <div className="w-3/12   ">
            <p> Range </p>
            <input
              type="range"
              min={0}
              max="100"
              value={searchParams.range}
              onChange={handleRangeChange}
              className="range range-error w-[200px] mt-3   "
            />
          </div>
          <div className="pt-6 ml-14 ">
            <button type="submit" className="btn btn-md btn-1">
              Search
            </button>
          </div>
        </form>
        <br />

        <div className="mx-auto grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
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
                    
                    <Link
                      href="/products/[id]"
                      as={`/products/${property._id}`}
                    >
                      <a className="btn btn-1 btn-sm">View</a>{" "}
                    </Link>
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
