import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [order, setOrder] = useState({});
    console.log(order);

    console.log(tool);
    useEffect(() => {
        fetch(`https://morning-thicket-25612.herokuapp.com/tools/${id}`)
            .then(res => res.json())
            .then(data => {
                setTool(data)
                setOrder(data)

            })
    }, [])
    const handelOrderValue = event => {
        const { minimumQuantity, ...rest } = tool;
        console.log(minimumQuantity, rest);
        const newMinimun = event.target.value;
        const newTool = { minimumQuantity: newMinimun, ...rest }
        setTool(newTool)
    }





    const handelPurchase = event => {

        event.preventDefault()
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const booking = {
            toolName: order.name,
            price: order.price,
            email: user.email,
            name: user.displayName,
            address,
            phone,
            orderedToolQuantity: parseInt(tool.minimumQuantity)
        }
        console.log(booking);
        const minimumQuantity = order.minimumQuantity;
        const toolsMinimumQuantity = parseInt(tool.minimumQuantity);
        if (minimumQuantity > toolsMinimumQuantity) {
            alert('plese provide minimum quantity');
        }
        else if (toolsMinimumQuantity > tool.availableQuantity) {
            alert('Please give less than available amount')
        }
        else {

            fetch('https://morning-thicket-25612.herokuapp.com/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(booking),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success(`Your order for ${order.name} is booked Successfuly`)
                        event.target.reset()
                    }
                    console.log('Success data yah', data);
                })
        }
    }

    return (
        <div class="card lg:card-side bg-base-100 shadow-xl px-20">
            <figure><img src={tool.image} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{tool.name}</h2>
                <p>{tool.Description}</p>
                <h3>Price: <span className='text-red-600'>{tool.price}</span> /unit</h3>

                <div class="card-actions justify-start">
                    <div class="badge badge-outline">Avilable Quantity: {order.availableQuantity}</div>
                    <div class="badge badge-outline">Minimum Quantity: {order.minimumQuantity}</div>
                </div>
                <p>Your Name: {user.displayName}</p>
                <p>Your Email: {user.email}</p>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Add Tools Qunatity</span>
                        <label class="label">
                            <span class="label-text-alt">Please add minimum: {order.minimumQuantity}</span>
                        </label>
                    </label>

                </div>

                <div>
                    <input onChange={handelOrderValue} type="text" placeholder="Type here" class="input input-bordered mb-2 rounded-lg w-full max-w-xs" value={tool.minimumQuantity} /><br />
                    <form onSubmit={handelPurchase}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Address</span>
                            </label>
                            <input type="text" name='address' placeholder="Type your address" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs mb-5">
                            <label class="label">
                                <span class="label-text">Your Phone number</span>
                            </label>
                            <input type="number" name='phone' placeholder="Type your phone number" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <input type='submit' value='Purchase' class="btn btn-error btn-sm" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;