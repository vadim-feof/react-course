import React from 'react';
import style from './PostItem.module.css'
import MyButton from "../../UI/Button/MyButton";
const PostItem = ({number, remove, ...props}) => {
    const {title, body} = props.post

    return (
        <div className={style.post}>
            <div className="post__content">
                <strong>{number}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;