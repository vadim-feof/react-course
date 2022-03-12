import React from 'react';
import styles from './Comment.module.css'
const Comment = ({name, email, body}) => {
    return (
        <div className={styles.comment}>
            <div className={styles.name}>
                <span>Name:</span> {name}
            </div>
            <div className={styles.email}>
                <span>Email:</span> {email}
            </div>
            <div className={styles.body}>
                {body}
            </div>
        </div>
    );
};

export default Comment;