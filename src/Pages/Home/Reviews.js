import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='px-10'>
            <h3 className='text-4xl mt-14 mb-14 font-bold text-center text-cyan-800'>Customer Reviews: {reviews.length}</h3>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-3'>
                {
                    reviews.map(review => <ReviewDetails
                        key={review._id}
                        review={review}
                    ></ReviewDetails>)
                }

            </div>
        </div>
    );
};

export default Reviews;