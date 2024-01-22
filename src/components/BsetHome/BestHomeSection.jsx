"use client"
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HouseView = ({ house }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("property.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
      <Slider {...settings}>
        {properties.map((property, index) => (
          <div key={index} className="card w-[100px]  bg-base-100 shadow-xl">
            <figure className="px-2 pt-2">
              <img
                src={property.imageUrl} // Use the actual property data
                alt={property.title} // Use the actual property data
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{property.title}</h2>
              <p>{property.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default HouseView;
