import React from 'react';

const OrderDetails = ({ order, user, i }) => {
    const { toolName, price, orderedToolQuantity } = order
    return (
        <tr>
            <th>{i + 1}</th>
            <td>{toolName}</td>
            <td>{user.email}</td>
            <td>{price}</td>
            <td>{orderedToolQuantity}</td>
            <td>
                <button class="btn btn-xs btn-success mr-3">Payment</button>
                <button class="btn btn-xs btn-error">Delete</button>
            </td>
        </tr>

    );
};

export default OrderDetails;