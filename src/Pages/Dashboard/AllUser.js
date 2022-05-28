import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AllUser = () => {


    const { isLoading, data: users, refetch } = useQuery('allusers', () =>
        fetch(`https://morning-thicket-25612.herokuapp.com/user`, {
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

    const handelMakeAdmin = email => {
        fetch(`https://morning-thicket-25612.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',

            headers: {
                'authorization': `bearer ${localStorage.getItem('access-token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                toast.success('Make an admin successfully')
            })

    }

    return (
        <div>
            <h3>All User</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{user._id}</td>
                                    <td>{user.email}</td>
                                    <td>

                                        {
                                            user.role !== 'admin' && <button
                                                onClick={() => handelMakeAdmin(user.email)}
                                                className='btn btn-xs btn-success'>Make Admin</button>
                                        }
                                    </td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;