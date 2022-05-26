import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderDetails from './OrderDetails';

const MyOrder = () => {
    const [user] = useAuthState(auth);

    const { isLoading, data: ordered } = useQuery('orderedTools', () =>
        fetch(`http://localhost:5000/orders/${user.email}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-4xl text-orange-900 uppercase'>my order:
            </h3>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ordered?.map((order, i) => <OrderDetails
                                key={order._id}
                                i={i}
                                order={order}
                                user={user}
                            ></OrderDetails>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;