import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import styles from './Navbar.module.css'
import MyButton from "../Button/MyButton";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setIsAuth(false)
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