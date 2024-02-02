"use client"
import CheckoutForm from '@/components/PaymentForm/CheckoutForm';
import PaymentForm from '@/components/PaymentForm/PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

const stripePromise = loadStripe('pk_test_51MksOxHCYi4Ph2BWETueho5GjrJA6PEkhrqMa1xHhgVXeKMgqbKXq1LC6vNdJh3hXCDSO7hD8tT3EDh7j7hVViQi00w5S32Fkx');


// const stripePromise = loadStripe(import.meta.env.NEXT_PaymentGateway_PK);


const page = () => {
  return (
    <Elements stripe={stripePromise} >
      <CheckoutForm />
    </Elements>
  );
};

export default page;