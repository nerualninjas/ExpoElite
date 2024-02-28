import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import usePropertyData from "@/hooks/Propertys/usePropertyData";
import Swal from "sweetalert2";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const CheckoutForm = ({ propertyId, params }) => {
  const { user } = UserAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  console.log('from checkoUt page: ',params);

  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  const { data: packegeData = [], isLoading: packegeDataLoading, refetch: packegerefetch, isPending: packegeIsPending } = useQuery({
    queryKey: ["packege", user?.email],
    queryFn: async () => {
        const res = await axiosPublic.get(`/getPackege?userId=${user.email}`);
        return res.data;
    }
})

console.log("from checkOut page::::::::::::::::::::::::", packegeData);

  const { propertySingleData, isPending, refetch } =
    usePropertyData(propertyId);
  const { _id, image, propertyName, propertyType, price } = propertySingleData || {};

  const stripe = useStripe();
  const elements = useElements();
  const totalPrice = parseInt(price);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
          setLoading(false);
        })
        .catch((error) => {
          setError("Error fetching payment details. Please try again.");
          setLoading(false);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.log("Payment error:", error);
        setError("Payment failed. Please check your card details.");
      } else {
        console.log("Payment successful", paymentMethod);
        setError("");

        const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || "anonymous",
                name: user?.displayName || "anonymous",
              },
            },
          });

        if (confirmError) {
          console.log("Payment confirmation error:", confirmError);
        } else {
          console.log("Payment intent", paymentIntent);
          if (paymentIntent.status === "succeeded") {
            console.log("Transaction ID", paymentIntent.id);
            setTransactionId(paymentIntent.id);

            const payment = {
              email: user.email,
              name: user?.displayName,
              price: totalPrice,
              date: new Date(),
              propertyName: propertyName,
              image: image,
              propertyId: _id,
              transactionId: paymentIntent.id,
              status: "pending",
            };
            const res = await axiosSecure
              .post("/addPayment", payment)
              .then(() => {
                setLoading(false);
                Swal.fire({
                  title: "payment save!",
                  text: "You clicked the button!",
                  icon: "success",
                })

              })
              .catch(()=>{
                setLoading(false);
              })

              // ----------------------------rentCollection

              // propertyId, buyerId, amout, duration

              const responsee = await axiosPublic.post(`/storeRentData?propertyId=${propertyId}&buyerId=${user.email}&amout=${packegeData.amount}&duration=${packegeData.packege}`)
              console.log(responsee.data); 
              

            
          }
        }
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 m-4 rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Payment</h3>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
        <div className="w-full lg:w-1/2">
          <h2 className="text-gray-800 text-lg font-semibold mb-4">Payment info:</h2>
          <div className="border-b mb-4 pb-4">
            <p className="text-sm">Property ID: {_id}</p>
            <p className="text-sm">Property Name: {propertyName}</p>
            <p className="text-sm">Property Type: {propertyType}</p>
            <p className="text-sm">Property Price: ${price}</p>
          </div>
          <div className="border-b mb-4 pb-4">
            <p className="text-sm">Your Name: {user?.displayName}</p>
            <p className="text-sm">Your Email: {user?.email}</p>
          </div>
          <h2 className="text-gray-600 text-lg font-semibold">
            Total Payable Bill: ${packegeData?.amount}
          </h2>
        </div>
        <div className="w-full lg:w-1/2">
          <CardElement
            className="input input-bordered input-warning pt-3 mb-4"
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
          <button
            className="btn btn-primary btn-block"
            type="submit"
            disabled={!stripe || !clientSecret || loading}
          >
            {loading ? "Processing..." : "Pay"}
          </button>
          <p className="text-error mt-2">{error}</p>
          {transactionId && (
            <p className="text-success mt-2">Transaction ID: {transactionId}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
