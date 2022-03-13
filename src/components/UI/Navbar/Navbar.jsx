import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import styles from './Navbar.module.css'
import MyButton from "../Button/MyButton";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.item}>
                <NavLink to="/posts">Посты</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/about">О приложении</NavLink>
            </div>
            {isAuth
                ?
                <div>
                    <MyButton onClick={logout}>
                        Выход
                    </MyButton>
                </div>
                :
                <div>
                    <MyButton>
                        <NavLink to="/login">Войти</NavLink>
                    </MyButton>
                </div>
            }
        </div>
    );
};

export default Navbar;