import { UserAuth } from "@/app/(auth)/context/AuthContext";
import usePropertyData from "@/hooks/Propertys/usePropertyData";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

import "./CheckoutForm.css"; // You can create a separate CSS file for styling

const CheckoutForm = ({ propertyId }) => {
  const { user } = UserAuth();
  const axiosSecure = useAxiosSecure();

  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  const { propertySingleData, isPending, refetch } =
    usePropertyData(propertyId);
  const { _id, image, propertyName, propertyType, price } =
    propertySingleData || {};

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
        setError("Payment failed. Please check your card details.");
      } else {
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
          setError("Payment confirmation failed. Please try again.");
        } else {
          if (paymentIntent.status === "succeeded") {
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

            await axiosSecure
              .post("/addPayment", payment)
              .then(() => {
                setLoading(false);
                Swal.fire({
                  title: "Payment saved!",
                  text: `Transaction ID: {transactionId}`,
                  icon: "success",
                });


              })
              .catch(() => {
                setLoading(false);
                setError("Failed to save payment. Please try again.");
              });
          }
        }
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h3 className="checkout-heading">Checkout</h3>
      <hr className="checkout-divider" />
      <div className="checkout-grid">
        <div className="property-info">
          <div className="property-image">
            <Image
              width={400}
              height={300}
              src={image}
              alt={propertyName}
              className="property-image-inner"
            />
          </div>
          <p className=" text-center py-3">{propertyName}</p>
          <p className="error-message">{error}</p>
       
        </div>
        <div className="payment-info">
          <div className="property-details">
            <p className=" property-type">Property Name:{propertyName}</p>
            <p className="property-type">Property Type: {propertyType}</p>
            <p className="property-price">Property Price: ${price}</p>
          </div>
          <div className="user-details">
            <p className="user-name">Your Name: {user?.displayName}</p>
            <p className="user-email">Your Email: {user?.email}</p>
          </div>
          <h2 className="total-bill">Total Payable Bill: ${price}</h2>
          <CardElement
            className="input input-bordered input-warning pt-3 my-8"
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
            className=" w-full  rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            type="submit"
            disabled={!stripe || !clientSecret || loading}
          >
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            {loading ? "Processing..." : "Pay"}
          </button>
          <p className="text-error mt-2">{error}</p>
          {transactionId && (
            <p className="text-success mt-2">Transaction ID: {transactionId}</p>
          )}
        </div>
      </div>
      <hr className="checkout-divider my-2" />
    </form>
  );
};

export default CheckoutForm;
