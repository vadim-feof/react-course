import React, {useEffect} from 'react';
import {useLocation, Navigate, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import Loader from "../components/UI/Loader/Loader";

const AuthRequire = ({children}) => {
    const {isAuth, auth, isLoading} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token'))
            auth(location, () => navigate(location))
        else
            navigate('/login', {state: {from: location}})
    },[isAuth])

    return (
        <>
            {!isAuth || isLoading ? <Loader/> : children}
        </>
    );
};

export default AuthRequire;