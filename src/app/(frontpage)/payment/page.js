 
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
 
 
 
import PaymentForm from '@/components/PaymentForm/PaymentForm';
import SuccessMessage from '@/components/PaymentForm/SuccessMessage';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const PaymentPage = () => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePaymentSuccess = () => {
    setPaymentSuccessful(true);
  };

  return (
    <div>
      <Header />
      {!paymentSuccessful ? (
        <Elements stripe={stripePromise}>
          <PaymentForm onSuccess={handlePaymentSuccess} />
        </Elements>
      ) : (
        <SuccessMessage />
      )}
    </div>
  );
};

export default PaymentPage;
