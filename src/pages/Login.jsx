import React, {useContext, useEffect, useState} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import {AuthContext} from "../context/context";
import {useFetching} from "../hooks/useFetching";
import AuthService from "../API/AuthService";
import Loader from "../components/UI/Loader/Loader";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {auth, signIn} = useAuth()

    const fromPage = location.state?.from?.pathname || '/posts'

    const [loginData, setLoginData] = useState({
        username: 'user',
        password: 'user',
        error: ''
    })

    const login = async event => {
        event.preventDefault()
        const error = await signIn(loginData, () => navigate(fromPage, {replace: true}))

        if (error) {
            setLoginData({
                ...loginData,
                error
            })
        }
    }

    if (localStorage.getItem('token'))
        auth(() => navigate(fromPage))

    return (
        <div>
            <form onSubmit={login}>
                <MyInput value={loginData.username}
                         type="text"
                         placeholder="Логин"
                         onChange={e => setLoginData({...loginData, username: e.target.value})}
                />
                <MyInput
                    value={loginData.password}
                    type="password"
                    placeholder="Пароль"
                    onChange={e => setLoginData({...loginData, password: e.target.value})}
                />
                <MyButton>Войти</MyButton>
                {loginData.error && <div>{loginData.error}</div>}
            </form>
        </div>
    );
};

export default Login;