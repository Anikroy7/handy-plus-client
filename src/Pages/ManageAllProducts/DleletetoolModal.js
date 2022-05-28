import React from 'react';
import { toast } from 'react-toastify';

const DleletetoolModal = ({ deleteTool, setDeleteTool, refetch }) => {
    const { name, _id } = deleteTool;
    console.log(deleteTool);

    const handelToolDelete = id => {
        console.log(id);
        fetch(`https://morning-thicket-25612.herokuapp.com/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`${name} is deleted successfully`)
                    setDeleteTool(null);
                    refetch()
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="delete-tool-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{name} will be delete permanatly from your database?</h3>
                    <div class="modal-action">
                        <label for="delete-tool-modal" class="btn btn-sm btn-success">Cancel</label>
                        <button onClick={() => handelToolDelete(_id)} className='btn btn-sm btn-error'>Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DleletetoolModal;