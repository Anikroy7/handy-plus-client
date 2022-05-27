import React from 'react';

const ReviewDetails = ({ review }) => {
    const { name, description, ratings } = review
    return (
        <div class="card w-100 bg-base-100 shadow-xl">
            <div class="card-body">
                <div className='flex justify-between'>
                    <h2 class="card-title text-cyan-600">{name}</h2>
                    <div class="avatar">
                        <div class="w-24 rounded-xl">
                            <img src="https://api.lorem.space/image/face?hash=64318" />
                        </div>
                    </div>
                </div>
                <p>{description}</p>
                <span className='text-purple-500'>{ratings}</span>
            </div>
        </div>
    );
};

export default ReviewDetails;