import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    console.log(id);


    const { isLoading, data: paymentTools, refetch } = useQuery('paymentTools', () =>
        fetch(`http://localhost:5000/orders/payment/${id}`, {
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
    const totalprice = paymentTools.price * paymentTools.orderedToolQuantity;
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl image-full ">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h1 className='text-xl text-blue-200 '>Hello, {paymentTools.name},</h1>
                <h2 class="card-title">Your order For: {paymentTools.toolName}</h2>
                <p className='text-yellow-500'>Price: ${paymentTools.price} /u</p>
                <p className=''>Order Quantity: {paymentTools.orderedToolQuantity}</p>
                <p>Your have to pay ${totalprice} for {paymentTools.toolName}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Payment;