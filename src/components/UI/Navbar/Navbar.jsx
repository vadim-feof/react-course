import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import styles from './Navbar.module.css'
import MyButton from "../Button/MyButton";
import {useAuth} from "../../../hooks/useAuth";

const Navbar = () => {
    const {isAuth, signOut} = useAuth()
    const navigate = useNavigate()

    const logout = () => {
        signOut(() => navigate('/login'))
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.item}>
                <NavLink to="/posts">Посты</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/about">О приложении</NavLink>
            </div>
            <div>
                {isAuth || localStorage.getItem('token')
                    ?
                        <MyButton onClick={logout}>
                            Выход
                        </MyButton>
                    :
                        <div>
                            <NavLink to="/login">
                                <MyButton style={{marginRight: 5}}>
                                    Войти
                                </MyButton>
                            </NavLink>
                            <NavLink to="/registration">
                                <MyButton>
                                    Регистрация
                                </MyButton>
                            </NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;