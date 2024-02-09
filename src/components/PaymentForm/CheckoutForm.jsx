"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
//hooks
import usePropertyData from "@/hooks/Propertys/usePropertyData";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const CheckoutForm = ({ propertyId }) => {
  const { user } = UserAuth();
  const axiosSecure = useAxiosSecure();
  const router = useRouter();
  const [userLiked, setUserLiked] = useState(false); // Added state for userLiked

  const { propertySingleData, isPending, refetch } =
    usePropertyData(propertyId);

  useEffect(() => {
    if (propertySingleData && propertySingleData.likeBy) {
      setUserLiked(propertySingleData.likeBy.includes(user?.email));
    }
  }, [propertySingleData, user]);

  const { _id, propertyName, propertyType, price, propertyDetails, quantity } =
    propertySingleData || {};

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // Handle the payment result or send data to your server as needed
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!propertySingleData) {
    // Handle property not found
    return <div>Property not found.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-base-200 p-4 m-2 rounded-md">
      <h3 className="text-3xl py-8">Payment</h3>
      <div className="flex w-full flex-col lg:flex-row">
        <div className=" w-full lg:w-1/2 ">
          <h2 className="text-gray-800 text-xl">Payment info : </h2>
          <hr />
          <p>Property ID: {_id}</p>
          <p>Property Name: {propertyName}</p>
          <p>Property Type: {propertyType}</p>
          <p>Property Price: {price} tk</p>
          <hr />
          <p>Your name: {user?.displayName}</p>
          <p>Your Email: {user?.email}</p>
          <hr className="py-4" />
          <h2 className="text-gray-600 text-xl font-bold">
            Total Payable bill :{price} tk{" "}
          </h2>
        </div>
        <div className=" w-full lg:w-1/2">
          <CardElement
            className="input input-bordered input-warning pt-3"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  "::placeholder": {
                    color: "black",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button className="mt-8 btn btn-sm btn-warning my-4" type="submit">
            Pay
          </button>
          <p className="text-success-500">* We accept all visa mastercard on stripe</p>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
