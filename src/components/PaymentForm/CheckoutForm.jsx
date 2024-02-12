import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { UserAuth } from "@/app/(auth)/context/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import usePropertyData from "@/hooks/Propertys/usePropertyData";
import Swal from "sweetalert2";

const CheckoutForm = ({ propertyId }) => {
  const { user } = UserAuth();
  const axiosSecure = useAxiosSecure();

  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  const { propertySingleData, isPending, refetch } =
    usePropertyData(propertyId);
  const { _id, propertyName, propertyType, price } = propertySingleData || {};

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
    <form onSubmit={handleSubmit} className="bg-base-200 p-4 m-2 rounded-md">
      <h3 className="text-3xl py-8">Payment</h3>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h2 className="text-gray-800 text-xl">Payment info:</h2>
          <hr />
          <p>Property ID: {_id}</p>
          <p>Property Name: {propertyName}</p>
          <p>Property Type: {propertyType}</p>
          <p>Property Price: {price} </p>
          <hr />
          <p>Your name: {user?.displayName}</p>
          <p>Your Email: {user?.email}</p>
          <hr className="py-4" />
          <h2 className="text-gray-600 text-xl font-bold">
            Total Payable bill: $ {price}
          </h2>
        </div>
        <div className="w-full lg:w-1/2">
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
          <button
            className="btn btn-sm btn-primary my-4"
            type="submit"
            disabled={!stripe || !clientSecret || loading}
          >
            {loading ? "Processing..." : "Pay"}
          </button>
          <p className="text-error">{error}</p>
          {transactionId && (
            <p className="text-success">Your transaction id: {transactionId}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
