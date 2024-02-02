"use client";
import React from "react";
import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
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
 
  };
  return (
    <form onSubmit={handleSubmit} className="bg-base-200 p-4 m-2 rounded-md">
        <h3 className="text-3xl py-8">Payment</h3>
      <CardElement
      className="input input-bordered input-warning pt-3  "
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
        className="mt-8 btn btn-sm btn-warning my-4"
        type="submit"
        
      >
        Pay
      </button>
     
    </form>
  );
};

export default CheckoutForm;