"use client"
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

const BestHomeSection = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { propertyData, isPending, refetch } = usePropertyAllData();
  const [properties, setProperties] = useState(propertyData);
  const [searchParams, setSearchParams] = useState({ location: "" });
  const [loading, setLoading] = useState(false);
  const [noProductFound, setNoProductFound] = useState(false);

  useEffect(() => {
    setProperties(propertyData);
    refetch();
  }, [propertyData, refetch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setNoProductFound(false);

      const locationValue = e.target.elements.location.value;
      const response = await axiosPublic.get(`searchbyloc?location=${locationValue}`);

      if (response.data.length === 0) {
        setNoProductFound(true);
      } else {
        setProperties(response.data);
      }

      setSearchParams({ location: "" }); // Clear the input field
    } catch (error) {
      console.error("Error in submitting form:", error);
      // Display an error message to the user
    } finally {
      setLoading(false);
    }
  };
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
              <div className="input-group mx-auto  gap-2 flex flex-row">
                <input
                  type="text"
                  name="location"
                  placeholder="Find by Location"
                  className="input input-bordered"
                />
                <button type="submit" className="btn btn-square">
                  {loading ? (
                    <FontAwesomeIcon icon={faSearch} className="animate-spin h-6 w-6" />
                  ) : (
                    <FontAwesomeIcon icon={faSearch} className="h-6 mt-2 w-6 text-current" />
                  )}
                </button>
              </div>
            </div>
          </form>

          <br />
          {noProductFound ? (
           <div className="">
             <p className="text-center text-red-500">No products found.</p>
             <p className="text-center text-green-500 py-8">but don't worry we have discover page</p>
             <Link href="/discover" to="/discover">
             <button className="btn btn-1 btn-sm block mx-auto">discover the best property</button>
             </Link>
             
           </div>
          ) : (
            <div className="mx-auto mt-2 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                {properties?.map((property, index) => (
            <div
              key={index}
              className="  card bg-base-100  "
       
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
          )}
        </div>
      </div>
    </>
  );
};

export default BestHomeSection;
