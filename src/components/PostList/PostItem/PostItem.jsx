import React from 'react';
import styles from './PostItem.module.css'
import MyButton from "../../UI/Button/MyButton";
import {useNavigate} from "react-router-dom";
const PostItem = ({number, remove, ...props}) => {
    const {title, body, id} = props.post
    const navigate = useNavigate()
    return (
        <div className={styles.post}>
            <div className={styles.content}>
                <strong>{id}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className={styles.btn}>
                <MyButton onClick={() => navigate(`/posts/${id}`)}>Открыть</MyButton>
            </div>
            <div className={styles.btn}>
                <MyButton onClick={() => remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;