import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams();
    const [tool, setTool] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={tool.image} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{tool.name}</h2>
                <p>{tool.Description}</p>
                <h3>Price: <span className='text-red-600'>{tool.price}</span> /unit</h3>

                <div class="card-actions justify-start">
                    <div class="badge badge-outline">Minimum Quantity: ${tool.minimumQuantity}</div>
                    <div class="badge badge-outline">Avilable Quantity: ${tool.availableQuantity}</div>
                </div>
                <p>Your Name: {user.displayName}</p>
                <p>Your Email: {user.email}</p>
            </div>
        </div>
    );
};

export default Purchase;