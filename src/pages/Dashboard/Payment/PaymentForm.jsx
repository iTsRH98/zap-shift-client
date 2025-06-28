import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../shared/Loading/Loading";
import useAuth from "../../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const stripe = useStripe();
  const element = useElements();
  const { parcelId } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { isPending, data } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isPending) {
    return <Loading></Loading>;
  }

  const amount = data?.cost;
  const amountInCents = amount * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !element) {
      return;
    }
    const card = element.getElement(CardElement);
    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("paymentMethod", paymentMethod);
    }

    const res = await axiosSecure.post(`/create-payment-intent`, {
      amount: amountInCents,
      parcelId,
    });

    const clientSecret = res.data.clientSecret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: element.getElement(CardElement),
        billing_details: {
          name: user.displayName,
          email: user.email,
        },
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        const transactionId = result.paymentIntent.id;
        console.log("payment succeeded");
        const paymentData = {
          parcelId,
          email: user.email,
          amount,
          transactionId,
          paymentMethod: result.paymentIntent.payment_method_types,
        };
        const paymentRes = await axiosSecure.post(`/payments`, paymentData);
        if (paymentRes.data.insertedId) {
          await Swal.fire({
            icon: "success",
            title: "Payment Successful",
            html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
            confirmButtonText: "GO to My Parcels",
          });
          navigate("/dashboard/myParcels");
        }
      }
    }

    console.log(res);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 shadow-xl rounded-md w-full max-w-md mx-auto"
      >
        <CardElement className="p-2 border rounded"></CardElement>
        <button
          type="submit"
          disabled={!stripe}
          className="btn btn-primary w-full"
        >
          Pay ${amount}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
