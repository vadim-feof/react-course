import React, {useContext, useEffect, useState} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import {useFetching} from "../hooks/useFetching";
import AuthService from "../API/AuthService";
import Loader from "../components/UI/Loader/Loader";
import {useNavigate} from "react-router-dom";

const Registration = () => {
    const navigate = useNavigate()
    const [regData, setRegData] = useState({
        username: '',
        password: '',
        message: ''
    })
    const [fetchReg, isLoadingReg, regError] = useFetching(async (username, password) => {
        const data = await AuthService.registration(username, password)
        setRegData({username: '', password: '', message: data.message})
        navigate('/login')
    })

    const registration = event => {
        event.preventDefault()
        fetchReg(regData.username, regData.password)
    }

    useEffect( () => () => {})

    return (
        <div>
            <form onSubmit={registration}>
                <MyInput value={regData.username}
                         type="text"
                         placeholder="Логин"
                         onChange={e => setRegData({...regData, username: e.target.value})}
                />
                <MyInput
                    value={regData.password}
                    type="password"
                    placeholder="Пароль"
                    onChange={e => setRegData({...regData, password: e.target.value})}
                />
                <MyButton>Зарегистрироваться</MyButton>
                {isLoadingReg
                    ? <Loader/>
                    : regError
                        ? <div>{regError.message}</div>
                        : <div>{regData.message}</div>
                }
            </form>
        </div>
    );
};

export default Registration;
