// components/PaymentForm.js
// import { useClient } from 'next/data-client';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  // const isClient = useClient();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Handle payment using Stripe API
    const result = await stripe.confirmCardPayment('{YOUR_SECRET_KEY}', {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      // Payment successful, invoke the success callback
      onSuccess();
    }
  };

  // Check if the component is running on the client before rendering
 

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <label className="block mb-4">
        Card Details
        <CardElement className="border p-2 mt-2" />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;
