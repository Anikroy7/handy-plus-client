import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteToolModal from './DeleteToolModal';
import OrderDetails from './OrderDetails';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [deletedTool, setDeletedTool] = useState(null)

    const { isLoading, data: ordered, refetch } = useQuery('orderedTools', () =>
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
                                setDeletedTool={setDeletedTool}
                            ></OrderDetails>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletedTool && <DeleteToolModal
                    deletedTool={deletedTool}
                    setDeletedTool={setDeletedTool}
                    refetch={refetch}
                ></DeleteToolModal>
            }
        </div>
    );
};

export default MyOrder;