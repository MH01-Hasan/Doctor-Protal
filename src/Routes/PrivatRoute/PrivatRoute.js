import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider';

const PrivatRoute = ({ children }) => {

    const { user, loding } = useContext(AuthContext)
    const location = useLocation()

    if (loding) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace  ></Navigate >
};

export default PrivatRoute; 