import React from 'react';
import { toast } from 'react-toastify';

const AddTools = () => {
    const handleAddNewTool = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const Description = event.target.description.value;
        const minimumQuantity = event.target.minimumQuantity.value;
        const availableQuantity = event.target.availableQuantity.value;
        const price = event.target.price.value;

        const image = event.target.image.value;
        const tool = {
            name, Description, minimumQuantity, availableQuantity, price, image
        }
        console.log(tool);
        fetch(`https://morning-thicket-25612.herokuapp.com`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tool),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success(`${name} is added successfully`)
                    event.target.reset();
                }
                console.log(data);
            })

    }


    return (
        <div class="hero min-h-screen bg-base-200">

            <div class="hero-content ">
                <div class="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddNewTool} class="card-body">
                        <h3 className='text-3xl text-purple-900 font-semibold text-center'>Add Tool</h3>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Tool name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Tool Description</span>
                            </label>
                            <textarea name='description' class="textarea textarea-bordered" placeholder="Tool description"></textarea>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Price</span>
                            </label>
                            <input name='price' type="number" placeholder="Tool Price" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Minimum Quantity</span>
                            </label>
                            <input name='minimumQuantity' type="number" placeholder="minimum quantity" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Available Quantity</span>
                            </label>
                            <input name='availableQuantity' type="number" placeholder="available quantity" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Image</span>
                            </label>
                            <input name='image' type="text" placeholder="image" class="input input-bordered" />
                        </div>

                        <div class="form-control mt-6">
                            <input value='Submit' type='submit' class="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTools;