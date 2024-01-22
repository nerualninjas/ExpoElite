"use client";
import { useEffect, useState } from "react";

const BestHomeSectionV2 = ({ house }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("property.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  if (!properties || properties.length === 0) {
    return <div>House not found!</div>;
  }

  return (
    <div className="w-[300px] lg:w-[800px]">
      <div className="container mx-auto ">
        <h3 className="text-center">
          <span className="heading float-left w-100">Featured properties</span>
        </h3>
        <br />

        <div className="grid grid-cols-3 gap-2">
          {properties.map((property, index) => (
            <div key={index} className=" card bg-base-100 shadow-xl">
              <figure className="p-3">
                <img
                  src={property.imageUrl} // Use the actual property data
                  alt={property.title} // Use the actual property data
                  className="rounded-xl "
                />
              </figure>

              <div className=" px-3   ">
                <h2 className="card-title font-bold text-2xl text-[#2C2946] text-left py-2">
                  ${property?.price}
                </h2>

                <div className="flex text-xs  w-full    content-stretch justify-between pb-2">
                  <div className="w-1/3">
                    <div className="flex items-center  gap-1">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/768px-Sign-check-icon.png"
                        alt=""
                        className="w-5 "
                      />{" "}
                      <span className="font-bold"> {property.bedrooms} </span>
                    </div>
                    <br />
                    Bedrooms
                  </div>
                  <div className="w-1/3">
                    <div className="flex items-center  gap-1">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/768px-Sign-check-icon.png"
                        alt=""
                        className="w-5 "
                      />{" "}
                      <span className="font-bold"> {property.bathrooms} </span>
                    </div>
                    <br />
                    Bathrooms
                  </div>{" "}
                  <div className="w-1/3">
                    <div className="flex items-center  gap-1">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/768px-Sign-check-icon.png"
                        alt=""
                        className="w-5 "
                      />{" "}
                      <span className="font-bold"> {property.livingRoom} </span>
                    </div>
                    <br />
                    Living Area
                  </div>
                </div>

                <hr className="py-2" />
                <div className="card-actions py-2 flex justify-between">
                  <div className="text-xs">
                    <div className="flex items-center  gap-1">
                      <img
                        src="https://static.thenounproject.com/png/3135900-200.png"
                        alt=""
                        className="w-5 "
                      />

                      {property.location}
                    </div>
                  </div>
                  <button className="btn btn-1  btn-sm">view</button>
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
