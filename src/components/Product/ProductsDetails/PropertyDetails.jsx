"use client";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { RiseLoader } from "react-spinners";
// import Rating from 'react-rating';
// Rating
import "@smastrom/react-rating/style.css";
//fontawesome icon
import usePropertyData from "@/hooks/Propertys/usePropertyData";
import {
  faBath,
  faBed,
  faCouch,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import PropertyDetailsSmallPart from "./PropertyDetailsSmallPart";

import { UserAuth } from "@/app/(auth)/context/AuthContext";
import Comment from "@/components/productDetails/comment/Comment";
import useNotification from "@/hooks/notifications/useNotificationCreate";
import useAxiosSecure from "@/hooks/useAxiosSecure";

import Link from "next/link";

import ChatWindow2 from "../ChatWindow2/ChatWindow2";
import RentPackages from "./Rent/RentPackages";

const PropertyDetail = ({ propertyId }) => {
  const { user } = UserAuth();
  const { notificationPost } = useNotification();
  const axiosSecure = useAxiosSecure();
  const router = useRouter();

  const { propertySingleData, isPending, refetch } =
    usePropertyData(propertyId);
  const [userLiked, setUserLiked] = useState(false);

  useEffect(() => {
    if (propertySingleData && propertySingleData.likeBy) {
      setUserLiked(propertySingleData.likeBy.includes(user?.email));
    }
  }, [propertySingleData, user]);

  // console.log(userLiked)

  if (isPending) {
    return (
      <div className="h-screen w-screen flex justify-center items-center  ">
        <RiseLoader
           color="rgb(220, 20, 60)"
          size={35}
          speedMultiplier={1}
          className="text-center"
        />
      </div>
    );
  }

  if (!propertySingleData) {
    return <div>Property not found.</div>;
  }

  // const { title, price /* other properties */ } = propertyData;
  const {
    _id,
    propertyName,
    propertyType,
    propertyCategory,
    price,
    image,
    bathrooms,
    bedrooms,
    livingRoom,
    propertyDetails,
    propertyCreator,
    sellerImage,
    sellerName,
    month1,
    month6,
    month12,
  } = propertySingleData || {};

  // const sellerEmail= "ashiq.buet73@gmail.com"; //TODO need change with seller email for notificaitn

  //Like Count Functional

  const handleLike = async () => {
    const userEmail = user?.email;

    await axiosSecure.put(`/addOrRemoveLike?id=${_id}&userEmail=${userEmail}`);
    refetch();

    // notifiacation add for like start
    const data = {
      userEmail: propertyCreator,
      notificationData: [
        {
          notificationText: `${user?.displayName} ${
            !userLiked ? "Like" : "Dislike"
          } your property`,
          notifyUserPhoto: `${user?.photoURL}`,
          notificationPath: `/products/${_id}`,
          notificationStatus: "unread",
        },
      ],
    };

    ////////////////comment Functionalty
    const handleComment = async (commentText) => {
      try {
        // Call your backend API to update the comment using PUT method
        const response = await axiosSecure.put(`/addComment?id=${_id}`, {
          comment: commentText,
        });

        // Handle success (you might want to update your state or refetch data)
        console.log("Comment added successfully", response.data);

        // You can also notify the property creator here if needed
      } catch (error) {
        // Handle error
        console.error("Error adding comment", error);
      }
    };
    // post api for notication
    notificationPost(data);

    //notification end
  };

  return (
    <div className="w-full min-h-screen mt-5 flex  flex-col  justify-center items-center ">
      <div className="w-full lg:w-11/12 min-h-screen black flex justify-center items-center bg-gradient-to-r from-rose-200 via-base-100 to-rose-200 blur-[90px] absolute"></div>
      <div className="w-full lg:w-11/12  flex flex-col  justify-center items-center rounded-xl bg-opacity-50 z-10 bg-base-100 dark:bg-gray-500 pb-32 shadow-xl">
        {/* -------------property details full card------------------- */}

        <div className="w-full lg:w-11/12 border-red-500 flex flex-col lg:flex-row justify-center items-center rounded-xl ">
          {/*------------------- image carousel and seller info container section------------------------- */}
          <div className="w-11/12 lg:w-1/2 text-center flex flex-col justify-center items-center  ">
            {/*------------------- image carousel section------------------------- */}
            <div className="w-full  text-center flex justify-center items-center py-2">
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
              </Carousel>
            </div>
            {/* <Carousel className="text-center " autoPlay>
            <div className="">
              <Image width={400} height={400} className="w-full h-full"  src={image} />
            </div>
          </Carousel> */}

            {/*------------------- seller info section------------------------- */}
            <div className=" text-justify text-sm text-gray-700 mb-2 ">
              <p>{propertyDetails}</p>
            </div>
          </div>

          {/* property details */}

          <div className="w-full lg:w-1/2 ml-1 card-body">
            <div className="flex justify-between items-center pb-2">
              <div>
                <div className="property-title text-2xl font-bold  text-rose-500">
                  {propertyName}
                </div>
              </div>

              <div className="flex text-2xl items-center">
                <button onClick={handleLike}>
                  <FaRegHeart
                    className={
                      userLiked
                        ? "text-2xl  inset-0  text-rose-600"
                        : "text-2xl"
                    }
                  />{" "}
                </button>
                <span className="ml-2">
                  {propertySingleData?.likeBy?.length}
                </span>
              </div>
            </div>
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star bg-red-400" />
              <input type="radio" name="rating-1" className="mask mask-star bg-red-400" />
              <input type="radio" name="rating-1" className="mask mask-star bg-red-400" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-red-400"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star bg-red-400" />
            </div>
            <div className="flex justify-between items-center my-1">
              <div className="property-type text-sm  font-semibold bg-gray-100 px-3 py-2 rounded  text-gray-700">
                {propertyType}
              </div>
              <div className="px-3 py-2 bg-rose-100 rounded ">
                <h1 className=" text-sm font-bold text-rose-900 mx-auto">
                  {propertyCategory}
                </h1>
              </div>
            </div>

            {/* ----------------------chatBot----------------------------------- */}
            <ChatWindow2
              propertyId={propertySingleData._id}
              propertyCreator={propertySingleData.propertyCreator}
            ></ChatWindow2>

            {/* -----------property title and buy now button ------------*/}
            <div className="flex flex-col lg:flex-row justify-start lg:justify-between "></div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                Location
              </h2>
              <div className="text-sm">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-rose-500 mr-1"
                />
                Main Street, Cityville
              </div>
            </div>
            <br />
            {propertyType === "Sell" ? (
              <div className="flex  justify-between">
                <div className=" py-2  text-black text-lg  ">
                  Price: ${price}
                </div>
                <div className="  ">
                  <Link
                    href={`../payment/${_id}`}
                    class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-rose-600 rounded-full shadow-md group"
                  >
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-rose-600 group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-rose-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                      Buy Now
                    </span>
                    <span class="relative invisible"> Buy Now</span>
                  </Link>
                </div>
              </div>
            ) : null}

            <div className="py-2">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                Property Details
              </h2>
              <div className="grid grid-cols-3 gap-8">
                <button className="rounded-full px-5 py-1 border-2 text-rose-600">
                  {" "}
                  <FontAwesomeIcon
                    icon={faBed}
                    className="text-rose-500 mr-1 text-md"
                  />{" "}
                  <span className="font-bold"> {bedrooms} </span>
                </button>
                <button className="rounded-full px-5 py-1 border-2 text-rose-600">
                  {" "}
                  <FontAwesomeIcon
                    icon={faBath}
                    className="text-rose-500 mr-1 text-md"
                  />{" "}
                  <span className="font-bold"> {bathrooms} </span>
                </button>
                <button className="rounded-full px-5 py-1 border-2 text-rose-600">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCouch}
                    className="text-rose-500 mr-1 text-md"
                  />{" "}
                  <span className="font-bold"> {livingRoom} </span>
                </button>
              </div>
            </div>

            {/* information of prpperty creator */}
            <div className="py-3">
              <div className="flex items-center">
                <h3 className=" text-gray-900 font-bold text-lg mr-2 my-2 ">
                  Property Creator
                </h3>
                <Link href={`/BookAppointment/${propertyId}`}>
                  <button className="btn btn-sm rounded-none  px-3 py-1 border-2 border-rose-600  text-sm font-semibold text-rose-600 hover:text-white bg-[#FFE4E6] hover:bg-rose-600">
                    {" "}
                    Book for Appointment
                  </button>
                </Link>
              </div>
              <div className="flex items-center">
                <Image
                  width={40}
                  height={40}
                  className="w-full h-full rounded-full"
                  src={sellerImage}
                  alt="photo"
                />
                <p className=" text-md ml-2"> {sellerName}</p>
              </div>
            </div>
          </div>
        </div>
        {/* comment Section*/}
        <div className="w-10/12">
          <Comment className="w-10/12 mb-12" propertyId={propertyId} />
        </div>
      </div>

      <div className="w-10/12 z-20 ">
        {propertyType === "Sell" ? (
          <PropertyDetailsSmallPart propertyId={propertyId} />
        ) : (
          <RentPackages propertyId={propertyId} />
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;
