import React, { useEffect, useState } from 'react';

const AllUser = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    console.log(users);
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