import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DleletetoolModal from './DleletetoolModal';

const ManageAllProducts = () => {

    const [deleteTool, setDeleteTool] = useState(null);
    const { isLoading, data: allTools, refetch } = useQuery('allTools', () =>
        fetch(`http://localhost:5000/tools`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${localStorage.getItem('access-token')}`
            }
        }).then(res => {
            return res.json();
        }
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }



    const handelDeleteTool = tool => {
        setDeleteTool(tool)
    }



    return (
        <div className='mt-12 mb-20 px-12'>

            <h3 className='text-3xl font-bold text-red-900 text-center mb-10'>All Tools</h3>

            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>price</th>
                            <th>AvailableQuantity</th>
                            <th>MinimumQuantity</th>
                            <th>Action for</th>
                        </tr>
                    </thead>

                    <tbody>

                        {


                            allTools.map((tool, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{tool.name}</td>
                                <td>{tool.price}</td>
                                <td>{tool.availableQuantity}</td>
                                <td>{tool.minimumQuantity}</td>
                                <td>
                                    <label onClick={() => handelDeleteTool(tool)} for="delete-tool-modal" class="btn btn-xs btn-error modal-button ">delete</label>

                                </td>
                            </tr>)

                        }
                    </tbody>
                </table>
                {
                    deleteTool && <DleletetoolModal
                        deleteTool={deleteTool}
                        key={deleteTool._id}
                        refetch={refetch}
                        setDeleteTool={setDeleteTool}
                    ></DleletetoolModal>
                }
            </div>
        </div >
    );
};

export default ManageAllProducts;