import React from 'react';
import {useLocation, Navigate, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import Loader from "../components/UI/Loader/Loader";

const AuthRequire = ({children}) => {
    const {isAuth, auth} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    if (!isAuth && localStorage.getItem('token')) {
        auth(() => navigate(location))
        return <Loader/>
    }
    else if (!localStorage.getItem('token')) {
        return <Navigate to={'/login'} state={{from: location}}/>
    }

    return children;
};

export default AuthRequire;