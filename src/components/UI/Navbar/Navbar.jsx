import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.item}>
                <NavLink to="/posts">Посты</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/about">О приложении</NavLink>
            </div>
        </div>
    );
};

export default Navbar;