"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faCouch,
  faMapMarkerAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";
import usePropertyAllData from "./../../hooks/Propertys/usePropertyAllData";
import useAxiosPublic from "./../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

const BestHomeSectionV2 = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { propertyData, isPending, refetch } = usePropertyAllData();
  const [properties, setProperties] = useState(propertyData);
  const [searchParams, setSearchParams] = useState({ location: "" });
  const [loading, setLoading] = useState(false);
  const [noProductFound, setNoProductFound] = useState(false);
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [range, setRange] = useState(24000);

  useEffect(() => {
    setProperties(propertyData);
    refetch();
  }, [propertyData, refetch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  const handleSeach = async () => {
    console.log("location:", location, "type: ", type, "range: ", range);
    const res = await axiosPublic.get(`/searchAndSort?maxPrice=${range}&propertyType=${type}&location=${location}`);
    console.log(res);
    setProperties(res.data);
  }

  return (
    <>
      <div className="w-full py-12">
        <div className="container mx-auto">
          <h3 className="text-center w-100 text-xl font-bold text-gray-900 p-4 ">
            Find your Best Home
          </h3>
          <hr className="w-1/4 mx-auto border-rose-400 border-2" />
          <br />

          <form onSubmit={handleSubmit} className="flex w-full  p-4">
            <div className="form-control w-full">
              <div className="input-group mx-auto  gap-2 flex flex-col lg:flex-row ">
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  name="location"
                  placeholder="Find by Location"
                  className="input input-bordered"
                />

                <select
                  onChange={(e) => setType(e.target.value)}
                  name="propertyType"
                  className="input input-bordered"
                >
                  <option value="">Select property type</option>
                  <option value="Business">Business</option>
                  <option value="Cabin">Cabin</option>
                  <option value="Cottage">Cottage</option>
                  <option value="Beach House">Beach House</option>
                  <option value="Villa">Villa</option>
                  <option value="Resort">Resort</option>
                  <option value="House">House</option>
                </select>

                <fieldset className="space-y-1 sm:w-60 dark:text-gray-100">
                  <div aria-hidden="true" className="px-1">
                    Price Range: <span className="">{range}</span>
                  </div>
                  <input
                    type="range"
                    onChange={(e) => setRange(e.target.value)}
                    className="w-full dark:accent-violet-400"
                    min="2000"
                    max="50000"
                  />
                </fieldset>

                <button type="submit" onClick={() => handleSeach()} className="btn btn-square">
                  {loading ? (
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="animate-spin h-6 w-6"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="h-6 mt-2 w-6 text-current"
                    />
                  )}
                </button>
              </div>
            </div>
          </form>

          <br />
          {noProductFound ? (
            <div className="">
              <p className="text-center text-red-500">No products found.</p>
              <p className="text-center text-green-500 py-8">
                but don&apos;t worry we have discover page
              </p>
              <Link href="/discover" to="/discover">
                <button className="btn btn-1 btn-sm block mx-auto">
                  discover the best property
                </button>
              </Link>
            </div>
          ) : (
            <div className="mx-auto mt-2 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
              {properties?.map((property, index) => (
                <div key={index} className="card bg-base-100 m-2 ">
                  <div>
                    <Image
                      width={400}
                      height={200}
                      src={property.image}
                      alt={property.propertyName}
                      className="object-cover rounded-t-md w-full mb-4 h-30 sm:h-60 dark:bg-gray-500"
                    />

                    <h1 className="top-2 right-0 px-3 py-2 bg-slate-100 absolute">{property?.propertyType}</h1>
                  </div>

                  <div className=" px-3   ">
                    <h2 className="flex justify-between card-title font-bold text-2xl text-[#2C2946] text-left py-2">
                      {property?.propertyType === "Sell" ? (
                        <>
                          ${property?.price}
                        </>
                      ) : (
                        <>
                          ${property?.month12}
                        </>
                      )}
                      <div className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                        {property?.propertyCategory}
                      </div>
                    </h2>


                    <div className="flex text-xs  w-full    content-stretch justify-between pb-2">
                      <div>
                        <div className="flex items-center gap-1">
                          <FontAwesomeIcon
                            icon={faBed}
                            className="text-gray-500 mr-1"
                          />
                          <span className="font-bold">
                            {" "}
                            {property.bedrooms}{" "}
                          </span>
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
                          <span className="font-bold">
                            {" "}
                            {property.bathrooms}{" "}
                          </span>
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
                          <span className="font-bold">
                            {" "}
                            {property.livingRoom}{" "}
                          </span>
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
                      <div className="w-1/4 flex justify-end ">
                        <Link
                          href="/products/[id]"
                          as={`/products/${property._id}`}
                        >
                          <span className="   btn btn-1 btn-sm">View</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BestHomeSectionV2;
