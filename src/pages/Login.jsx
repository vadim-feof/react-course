import React, {useContext, useEffect, useState} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import {AuthContext} from "../context/context";
import {useFetching} from "../hooks/useFetching";
import AuthService from "../API/AuthService";
import Loader from "../components/UI/Loader/Loader";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    const [loginData, setLoginData] = useState({
        username: 'user',
        password: 'user'
    })
    const [fetchLogin, isLoadingLogin, loginError] = useFetching(async (username, password) => {
        const data = await AuthService.login(username, password)
        localStorage.setItem('token', data.token)
        localStorage.setItem('username', data.username)
        setIsAuth(true)
    })

    const login = async event => {
        event.preventDefault()
        fetchLogin(loginData.username, loginData.password)
    }

    useEffect( () => () => {})

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
                {isLoadingLogin
                    ? <Loader/>
                    : loginError
                        ? <div>{loginError.message}</div>
                        : null
                }
            </form>
        </div>
    );
};

export default Login;