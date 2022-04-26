import React from 'react';
import styles from './PostItem.module.css'
import MyButton from "../../UI/Button/MyButton";
import {useNavigate} from "react-router-dom";
const PostItem = ({number, remove, update, ...props}) => {
    const {author, title, body, _id} = props.post
    const navigate = useNavigate()
    return (
        <div className={styles.post}>
            <div className={styles.content}>
                <div>Автор: {author}</div>
                <strong>{number}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div>
                <div className={styles.btn}>
                    <MyButton onClick={() => navigate(`/posts/${_id}`)}>Открыть</MyButton>
                </div>
                <div className={styles.btn}>
                    <MyButton onClick={() => remove(props.post)}>Удалить</MyButton>
                </div>
                <div className={styles.btn}>
                    <MyButton onClick={() => update(props.post)}>Изменить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;