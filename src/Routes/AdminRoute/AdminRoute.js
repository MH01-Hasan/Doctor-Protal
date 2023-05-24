import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {

    const { user, loding } = useContext(AuthContext)
    const [Isadmin,Isadminlooding]=useAdmin(user?.email)
    const location = useLocation()

    if (loding || Isadminlooding) {
        return <progress className="progress w-56"></progress>
    }

    if (user && Isadmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace  ></Navigate >
};

export default AdminRoute; 