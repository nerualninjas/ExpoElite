"use client";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { RiseLoader } from "react-spinners";
import {Image} from "@nextui-org/react";
// import Rating from 'react-rating';
// Rating

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
//fontawesome icon
import {
  faBed,
  faBath,
  faCouch,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaRegHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import usePropertyData from "@/hooks/Propertys/usePropertyData";
import PropertyDetailsSmallPart from "./PropertyDetailsSmallPart";


const PropertyDetail = ({ propertyId }) => {
  const router = useRouter();
  //   const { id } = router.query;
  console.log(router.query);

  const { propertySingleData, isPending, refetch } = usePropertyData(
    propertyId
  );

  if (isPending) {
    return (
      <div className="h-screen w-screen flex justify-center items-center  ">
        <RiseLoader color="rgba(237, 95, 180, 0.83)" size={35} speedMultiplier={1} className="text-center" />
      </div>
    )
  }

  if (!propertySingleData) {
    return <div>Property not found.</div>;
  }

  // const { title, price /* other properties */ } = propertyData;
  const { propertyName, propertyType, price, image, bathrooms, bedrooms, livingRoom, propertyDetails } = propertySingleData || {};

  return (
    <div className="w-full min-h-screen mt-5 flex  flex-col  justify-center items-center">
     
      <div className="w-11/12 min-h-screen  flex justify-center items-center bg-gradient-to-r from-rose-200 via-base-100 to-rose-200 blur-[90px] absolute"></div>
      <div className="w-11/12  flex flex-col lg:flex-row justify-center items-center  rounded-xl bg-opacity-50 z-10 bg-white pb-10">
        {/* image section */}
        <div className="w-full lg:w-1/2  text-center flex justify-center items-center py-10">
          <Carousel className="text-center " autoPlay>
            <div className="">
              <img src={image} className="w-full h-full" />
             
            </div>
            <div>
              <img src="https://i.ibb.co/jZJhPPq/apartment-bed-bedroom-book-shelves-439227.jpg" />
             
            </div>
            <div>
              <img src="https://i.ibb.co/dPsnkq1/apartment-bed-bedroom-comfort-545034.jpg" />
              
                 
            </div>
            <div>
              <img src="https://i.ibb.co/dPsnkq1/apartment-bed-bedroom-comfort-545034.jpg" />
             
            </div>
            <div>
              <img src="https://i.ibb.co/dPsnkq1/apartment-bed-bedroom-comfort-545034.jpg" />
            </div>
          </Carousel>

          {/* <Carousel className="text-center " autoPlay>
            <div className="">
              <Image width={400} height={400} className="w-full h-full"  src={image} />
            </div>
            <div>
              <Image width={400} height={400} className="w-full h-full" src="https://i.ibb.co/jZJhPPq/apartment-bed-bedroom-book-shelves-439227.jpg" />
            </div>
            <div>
              <Image width={400} height={400} className="w-full h-full" src="https://i.ibb.co/dPsnkq1/apartment-bed-bedroom-comfort-545034.jpg" />
            </div>
            <div>
              <Image width={400} height={400} className="w-full h-full" src="https://i.ibb.co/dPsnkq1/apartment-bed-bedroom-comfort-545034.jpg" />
            </div>
            <div>
              <Image width={400} height={400} className="w-full h-full" src="https://i.ibb.co/dPsnkq1/apartment-bed-bedroom-comfort-545034.jpg" />
            </div>
          </Carousel> */}
        </div>

        {/* property details */}

        <div className="w-full lg:w-1/2  ml-2 card-body">
          <div className="flex justify-between items-center">
            <div>
              {" "}
              <button className="flex items-center">
                {" "}
                <span>
                  <IoMdArrowRoundBack />
                </span>
                Back{" "}
              </button>
            </div>
            <div className="flex text-2xl items-center">
              <FaRegHeart className="text-2xl" />{" "}
              <span className="ml-2"> 32</span>
            </div>
          </div>

          <br />
          <div className="property-type text-xl font-semibold  text-gray-500">
           {propertyType}
          </div>
          {/* -----------property title and buy now button ------------*/}
          <div className="flex justify-between"> 
          <div className="property-title text-3xl font-bold mb-2 text-rose-500">
          {propertyName}
          </div>
          <div> <button className="  rounded-lg px-5 py-2 border-2 border-rose-600  text-xl font-semibold text-rose-600 hover:text-white hover:bg-rose-600">Buy Now</button></div>

          </div>
         

          <div>
            <Rating style={{ maxWidth: 120 }} value={4} readOnly />
          </div>
          <br />
          <div>
            <h2 className="text-2xl font-bold mb-3">Location</h2>
            <div>
              {" "}
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-rose-500 mr-1"
              />
              Main Street, Cityville
            </div>
          </div>
          <br />
          <div>
            <h2 className="text-2xl font-bold mb-3">Property Details</h2>
            <div className="grid grid-cols-3 gap-20">
              <button className="rounded-full px-5 py-2 border-2 text-rose-600">
                {" "}
                <FontAwesomeIcon
                  icon={faBed}
                  className="text-rose-500 mr-1 text-xl"
                />{" "}
                <span className="font-bold"> {bedrooms} </span>
              </button>
              <button className="rounded-full px-5 py-2 border-2 text-rose-600">
                {" "}
                <FontAwesomeIcon
                  icon={faBath}
                  className="text-rose-500 mr-1 text-xl"
                />{" "}
                <span className="font-bold"> {bathrooms} </span>
              </button>
              <button className="rounded-full px-5 py-2 border-2 text-rose-600">
                {" "}
                <FontAwesomeIcon
                  icon={faCouch}
                  className="text-rose-500 mr-1 text-xl"
                />{" "}
                <span className="font-bold"> {livingRoom} </span>
              </button>
            </div>
          </div>
          <div className=" text-justify mt-10 mb-40 md:mb-20"> <p>{propertyDetails}</p> 
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            expedita, asperiores cumque officia non recusandae iure dignissimos
            nemo totam sapiente blanditiis atque necessitatibus enim quos
            consequuntur sed reprehenderit? Laudantium veritatis nesciunt odio
            distinctio sit iusto accusamus ipsam, reiciendis animi? Sunt,
            aperiam voluptates. Quam, quia minima magnam quisquam dolore
            accusantium ipsum assumenda. Eius voluptatum omnis, itaque
            temporibus porro, asperiores sapiente distinctio dolores est enim
            nihil optio earum natus obcaecati rerum unde debitis atque facere
            laboriosam? Aliquid reiciendis quibusdam ipsum neque velit nulla
            inventore eligendi odio sunt reprehenderit. Culpa in consectetur
            alias eius laudantium voluptates. Labore odio temporibus hic illum
            non? Architecto. */}
          </div>
        </div>
      </div>
      <div className="w-10/12 z-20">
        <PropertyDetailsSmallPart propertyId={propertyId} />
      </div>

    </div>
  );
};

export default PropertyDetail;
