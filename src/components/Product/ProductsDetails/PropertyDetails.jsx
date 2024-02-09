"use client";
import React, { useEffect ,useState} from "react";
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

import { UserAuth } from "@/app/(auth)/context/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Comment from "@/components/productDetails/comment/Comment";
import useNotification from "@/hooks/notifications/useNotificationCreate";

import Link from "next/link";

import ChatWindow2 from "../ChatWindow2/ChatWindow2";

const PropertyDetail = ({ propertyId }) => {
  const {user}=UserAuth()
  const { notificationPost } = useNotification()
  const axiosSecure = useAxiosSecure()
  const router = useRouter();
  //   const { id } = router.query;
  // console.log(router.query);

  const { propertySingleData, isPending, refetch } = usePropertyData(
    propertyId
  );
  const [userLiked,setUserLiked]=useState(false)

  useEffect(()=>{
    if(propertySingleData && propertySingleData.likeBy){
      setUserLiked(propertySingleData.likeBy.includes(user?.email))
    }
  },[propertySingleData,user])

// console.log(userLiked)

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
  const { _id,propertyName, propertyType, price, image, bathrooms, bedrooms, livingRoom, propertyDetails, quantity } = propertySingleData || {};

  const sellerEmail= "ashiq.buet73@gmail.com"; //TODO need change with seller email for notificaitn

  //Like Count Functional


  const handleLike=async()=>{
  const userEmail = user?.email;
  
  await axiosSecure.put(`/addOrRemoveLike?id=${_id}&userEmail=${userEmail}`)
  refetch()

    // notifiacation add for like start
    const data = {
      userEmail: sellerEmail,
      notificationData: [{

        notificationText:`${user?.displayName} ${!userLiked ? "Like":"Dislike"} your property`,
        notifyUserPhoto: `${user?.photoURL}`,
        notificationPath: `/products/${_id}`,
                notificationStatus: "unread"
      }]
    }
    // post api for notication 
    notificationPost(data)

    //notification end

  console.log(userEmail,_id);

  }


  return (
    <div className="w-full min-h-screen mt-5 flex  flex-col  justify-center items-center ">
     
      <div className="w-full lg:w-11/12 min-h-screen black flex justify-center items-center bg-gradient-to-r from-rose-200 via-base-100 to-rose-200 blur-[90px] absolute"></div>
     <div className="w-full lg:w-11/12  flex flex-col  justify-center items-center rounded-xl bg-opacity-50 z-10 bg-base-100 dark:bg-gray-500 pb-32 shadow-xl">
     {/* property details information and image container  */}
     
     <div className="w-full lg:w-11/12  flex flex-col lg:flex-row justify-center items-center rounded-xl ">
        {/* image section */}
        <div className="w-11/12 lg:w-1/2  text-center flex justify-center items-center py-2">
          <Carousel className="text-center " autoPlay>
            <div className="">
              <img src={image} className="w-full h-full"/>
             
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
             <button onClick={handleLike}><FaRegHeart className={userLiked ?"text-2xl  inset-0  text-rose-600":"text-2xl"} />{" "}</button>
              <span className="ml-2">{propertySingleData?.likeBy.length}</span>
            </div>
          </div>

          <br />
          <div className="property-type text-xl font-semibold  text-gray-500">
           {propertyType}
          </div>

          {/* ----------------------chatBot----------------------------------- */}
          <ChatWindow2 propertyId={propertySingleData._id} propertyCreator={propertySingleData.propertyCreator}></ChatWindow2>


          {/* -----------property title and buy now button ------------*/}
          <div className="flex flex-col lg:flex-row justify-start lg:justify-between "> 
          <div className="property-title text-2xl font-bold mb-2 text-rose-500">
          {propertyName}
          </div>
 
          {/* <div> 
            <a href="/payment">
             <button className="  rounded-lg px-3 py-2 border-2 border-rose-600  text-md font-semibold text-rose-600 hover:text-black hover:bg-rose-600">Buy Now</button>
            </a>
           </div> */}
 
        
 

          </div>
         

          <div>
            <Rating style={{ maxWidth: 120 }} value={4} readOnly />
          </div>
          <br />
          <div>
            <h2 className="text-xl font-bold mb-3">Location</h2>
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
          <div className="flex "> 

          <div className=" rounded px-5 py-2 border-2 text-black text-xl mr-2 ">
         Price: ${price}
          </div>
          <div className="  ">
          <Link href={`../payment/${_id}`}>
             <button className="  rounded px-5 py-2 border-2 border-rose-600  text-xl font-semibold text-rose-600 hover:text-white hover:bg-rose-600">Buy Now</button>
            </Link>

          </div>

          </div>
          <br />
          <div>
            <h2 className="text-2xl font-bold mb-3">Property Details</h2>
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
          <div className=" text-justify mt-10 mb-40 md:mb-20"> <p>{propertyDetails}</p> 
            
          </div>
        </div>
      </div>
             {/* comment Section*/}
      <div className="w-11/12">
        <Comment className="w-11/12 mb-12" propertyId={propertyId} />
       </div>
     </div>
     
        
      <div className="w-10/12 z-20 ">
        <PropertyDetailsSmallPart propertyId={propertyId} />
      </div>

    </div>
  );
};

export default PropertyDetail;
