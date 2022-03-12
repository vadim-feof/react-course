import React from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";

const Login = () => {

    const login = event => {
        event.preventDefault()
    }

    return (
        <div>
            <form>
                <MyInput type="text" placeholder="Логин"/>
                <MyInput type="password" placeholder="Пароль"/>
                <MyButton onClick={login}>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;