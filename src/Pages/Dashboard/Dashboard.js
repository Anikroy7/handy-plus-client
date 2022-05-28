import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h3 className='text-3xl text-center mb-14'>Dashboard</h3>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-44 bg-base-100 text-base-content">


                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>

                    {
                        admin && <div>

                            <li><Link to='/dashboard/allUser'>All User</Link></li>
                        </div>
                    }
                    {

                        !admin && <div>
                            <li><Link to='/dashboard/myOrder'>My Order</Link></li>
                            <li><Link to='/dashboard/addReview'>Add a review</Link></li>
                        </div>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;