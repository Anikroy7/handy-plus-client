
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ paymentTools }) => {
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const { price, name, toolName, } = paymentTools;
    console.log(price, 'thoisisi');

    useEffect(() => {
        if (price) {
            fetch("https://morning-thicket-25612.herokuapp.com/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ price }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret)
                    }
                });
        }
    }, [price]);




    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '')
        setSuccess('')
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        price: price,
                        toolName: toolName
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
        }
        else {
            setCardError('')
            console.log(paymentIntent);
            setSuccess('Your payment is completed')
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn bg-emerald-700 btn-sm border-0 mt-5' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-400'>{cardError}</p>
            }
            {
                success && <p className='text-green-500'>{success}</p>
            }
        </>
    );
};

export default CheckoutForm;