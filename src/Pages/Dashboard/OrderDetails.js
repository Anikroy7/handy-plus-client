import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetails = ({ order, user, i, setDeletedTool }) => {
    const { toolName, price, orderedToolQuantity, _id, paid } = order;

    return (
        <tr>
            <th>{i + 1}</th>
            <td>{toolName}</td>
            <td>{user.email}</td>
            <td>{price}</td>
            <td>{orderedToolQuantity}</td>
            <td>
                {

                    !paid ? <Link to={`/dashboard/payment/${_id}`} class="btn btn-xs btn-warning mr-3">Payment</Link> : <button disabled class="btn btn-xs btn-success mr-3">Paid</button>
                }

                <label onClick={() => setDeletedTool(order)} class=" modal-button btn btn-xs btn-error" for="delete-tool-modal" >Delete</label>
            </td>
        </tr>

    );
};

export default OrderDetails;