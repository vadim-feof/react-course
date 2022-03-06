import React from 'react';
import style from './PostItem.module.css'
const PostItem = ({number, ...props}) => {
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
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;