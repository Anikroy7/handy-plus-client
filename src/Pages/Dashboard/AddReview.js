import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const handelAddReview = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const ratings = event.target.ratings.value;
        console.log(name, description, ratings);
        const review = {
            name, description, ratings
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success(`${name}, Thanks for your review`)
                    event.target.reset()
                }
            })
    }



    return (
        <div className='w-72 bg-slate-400 mx-auto p-14'>
            <h3 className='text-white text-xl font-bold text-center mt-3 mb-4'>Add Items</h3>
            <form onSubmit={handelAddReview}>
                <input type="text" required name='name' placeholder="Type your name" class="input input-bordered w-full max-w-xs mb-2" />
                <input type="text" required name='description' placeholder="Type your description" class="input input-bordered mb-2 w-full max-w-xs" />
                <input type="text" required name='ratings' placeholder="Your ratings" class="input input-bordered w-full mb-2 max-w-xs" />
                <input type='submit' value='Add Review' className='btn btn-sm btn-success text-center w-full' />
            </form>
        </div>
    );
};

export default AddReview;