import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contex/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [Isadmin]=useAdmin(user?.email)

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Apporment</Link></li>
                       {
                           Isadmin && <>
                            <li><Link to='/dashboard/alluser'>All User</Link></li>
                            <li><Link to='/dashboard/addDoctor'>Add-Doctor</Link></li>

                           </>
                       }
                        <li><Link to='/dashboard'>Hello</Link></li>

                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;