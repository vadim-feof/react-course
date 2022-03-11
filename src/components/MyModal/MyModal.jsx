import React from 'react';
import styles from './MyModal.module.css'

const MyModal = ({visible, setVisible, children}) => {

    const visibleStyles = [styles.myModal]
    if (visible)
        visibleStyles.push(styles.active)

    return (
        <div className={visibleStyles.join(' ')}
             onClick={() => setVisible(false)}
        >
            <div className={styles.content}
                 onClickCapture={event => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;