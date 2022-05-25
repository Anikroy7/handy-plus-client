import React from 'react';
import { useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const ToolsDetail = ({ tool }) => {
    const { name, minimumQuantity, availableQuantity, price, image, Description, _id } = tool;
    const navigate = useNavigate();
    const handelNavigate = id => {
        navigate(`/purchase/${id}`)
    }

    return (
        <div class="card  bg-base-100 drop-shadow-xl">
            <figure><img src={"https://api.lorem.space/image/shoes?w=400&h=225"} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <h3>Price: <span className='text-red-600'>{price}</span> /unit</h3>
                <p>{Description}</p>
                <div class="card-actions justify-start">
                    <div class="badge badge-outline">Minimum Quantity: ${minimumQuantity}</div>
                    <div class="badge badge-outline">Avilable Quantity: ${availableQuantity}</div>
                </div>
            </div>
            <button onClick={() => handelNavigate(_id)} class="btn btn-active btn-secondary">Purchase</button>
        </div>
    );
};

export default ToolsDetail;