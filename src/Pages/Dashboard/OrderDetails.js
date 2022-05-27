import React from 'react';

const OrderDetails = ({ order, user, i, setDeletedTool }) => {
    const { toolName, price, orderedToolQuantity, _id } = order;

    return (
        <tr>
            <th>{i + 1}</th>
            <td>{toolName}</td>
            <td>{user.email}</td>
            <td>{price}</td>
            <td>{orderedToolQuantity}</td>
            <td>
                <button class="btn btn-xs btn-success mr-3">Payment</button>

                <label onClick={() => setDeletedTool(order)} class=" modal-button btn btn-xs btn-error" for="delete-tool-modal" >Delete</label>
            </td>
        </tr>

    );
};

export default OrderDetails;