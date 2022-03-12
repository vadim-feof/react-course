import React, {useState} from 'react';
import styles from './MyModal.module.css'

const MyModal = ({visible, setVisible, children}) => {
    let rootClose = false // to prevent close modal when select input and mouseDown on root element
    const closeModal = () => {
        if (rootClose)
            setVisible(false)
    }

    const visibleStyles = [styles.myModal]
    if (visible)
        visibleStyles.push(styles.active)


    return (
        <div className={visibleStyles.join(' ')}
             onClick={closeModal}
             onMouseDown={() => {rootClose = true}}
        >
            <div className={styles.content}
                 onClick={event => event.stopPropagation()}
                 onMouseDown={event => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;