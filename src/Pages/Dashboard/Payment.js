import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1qwxD4PFFI7RawB9Gf0codBg6vO7MkSnnQtQIPySVa6xUG5t3Gfywq69zQvRVbAm4t667sjHMC9sl5HlwO1BPr00uvEMj931');

const Payment = () => {
    const { id } = useParams();
    console.log(id);


    const { isLoading, data: paymentTools, refetch } = useQuery('paymentTools', () =>
        fetch(`https://morning-thicket-25612.herokuapp.com/orders/payment/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${localStorage.getItem('access-token')}`
            }
        }).then(res => {
            return res.json();
        }

        )
    )
    console.log(paymentTools);
    const totalprice = paymentTools?.price * paymentTools?.orderedToolQuantity;
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section>

            <div class="card w-96 bg-base-100 shadow-xl image-full ">
                <figure><img src={paymentTools.image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h1 className='text-xl text-blue-200 '>Hello, {paymentTools.name},</h1>
                    <h2 class="card-title">Your order For: {paymentTools.toolName}</h2>
                    <p className='text-yellow-500'>Price: ${paymentTools.price} /u</p>
                    <p className=''>Order Quantity: {paymentTools.orderedToolQuantity}</p>
                    <p>Your have to pay ${totalprice} for {paymentTools.toolName}</p>
                </div>

            </div>
            <div class="card w-96 bg-yellow-50 text-black shadow-xl mt-8">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            paymentTools={paymentTools}
                        />
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default Payment;