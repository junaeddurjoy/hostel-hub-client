import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Components/CheckoutForm";

// key add
const stripePromise = loadStripe('import.meta.env.VITE_PAYMENT_PK');
const Payment = () => {
    return (
        <div className="mx-32">
            <h1 className=' divider text-center text-3xl font-semibold'>Payment</h1>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;