import React from 'react';
import styles from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <input className={styles.myInput} {...props}/>
    );
};

export default MyInput;


/*
Для неуправляемого/неконтролируемого компонента необходимо обернуть
его в React.forwardRef и передать реф
*/
const MyInputUncontrolled = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={styles.myInput} {...props}/>
    );
});

export {MyInputUncontrolled};