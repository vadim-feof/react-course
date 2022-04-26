import React, {useEffect, useState} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {signIn, isLoading, error} = useAuth()

    const fromPage = location.state?.from?.pathname || '/posts'

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })

    const login = async event => {
        event.preventDefault()
        signIn(loginData.username, loginData.password, () => {
            navigate(fromPage, {replace: true})
        })
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate(fromPage)
        }
    }, [])

    const checkBtnDisabled = !(loginData.username && loginData.password)
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
                <MyButton disabled={checkBtnDisabled || isLoading}>Войти</MyButton>
                {error && <div className='error'>{error}</div>}
                <div>
                    {isLoading && <Loader/>}
                </div>
            </form>
        </div>
    );
};

export default Login;