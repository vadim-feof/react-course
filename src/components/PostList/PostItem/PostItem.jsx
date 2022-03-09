import React from 'react';
import styles from './PostItem.module.css'
import MyButton from "../../UI/Button/MyButton";
const PostItem = ({number, remove, ...props}) => {
    const {title, body} = props.post

    return (
        <div className={styles.post}>
            <div className={styles.content}>
                <strong>{number}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className={styles.btn}>
                <MyButton onClick={() => remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;