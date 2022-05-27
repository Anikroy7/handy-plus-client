import React from 'react';
import { toast } from 'react-toastify';

const DeleteToolModal = ({ deletedTool, setDeletedTool, refetch }) => {
    const { toolName, _id } = deletedTool;
    console.log(deletedTool);
    const handelDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    setDeletedTool(null)
                    toast.success(`${toolName} deleted successfully`)
                    refetch()
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="delete-tool-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you want to sure delete {toolName} permanently??</h3>

                    <div class="modal-action">
                        <label for="delete-tool-modal" class="btn btn-sm btn-success">Cancel</label>
                        <button onClick={() => handelDelete(_id)} class="btn btn-sm btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteToolModal;