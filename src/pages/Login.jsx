import React, {useContext} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import {AuthContext} from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Логин"/>
                <MyInput type="password" placeholder="Пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;