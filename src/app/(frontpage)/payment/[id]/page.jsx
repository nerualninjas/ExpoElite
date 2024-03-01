"use client";
import CheckoutForm from "@/components/PaymentForm/CheckoutForm";
import usePropertyData from "@/hooks/Propertys/usePropertyData";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
const stripePromise = loadStripe(
  "pk_test_51MksOxHCYi4Ph2BWETueho5GjrJA6PEkhrqMa1xHhgVXeKMgqbKXq1LC6vNdJh3hXCDSO7hD8tT3EDh7j7hVViQi00w5S32Fkx"
);

const Payment = ({ params }) => {

  console.log('from payment: ',params);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm propertyId={params?.id} params={params}/>
      </Elements>
    </div>
  );
};

export default Payment;
