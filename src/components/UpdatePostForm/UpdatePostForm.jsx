import React, {useEffect, useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";

const UpdatedPostForm = ({update, selectedPost}) => {

    const [post, setPost] = useState({
        author: '',
        title: '',
        body: ''
    })
    useEffect(() => {
        if (selectedPost)
            setPost({...selectedPost})
    }, [selectedPost])

    const checkBtnDisabled = !(post.author && post.body && post.title)

    const updatePost = (e) => {
        e.preventDefault()
        const updatedPost = {
            ...post
        }
        update(updatedPost)
        setPost({
            author: localStorage.getItem('username'),
            title: '',
            body: ''
        })
    }

    return (
        <form>
            <MyInput type="text"
                     placeholder={"Ваше имя"}
                     value={post.author}
                     onChange={event => setPost(
                         {...post, author: event.target.value})}
            />
            <MyInput type="text"
                     placeholder={"Название поста"}
                     value={post.title}
                     onChange={event => setPost(
                         {...post, title: event.target.value})}
            />
            <MyInput type="text"
                     placeholder={"Описание поста"}
                     value={post.body}
                     onChange={event => setPost(
                         {...post, body: event.target.value})}
            />
            <MyButton disabled={checkBtnDisabled}
                      onClick={(e) => updatePost(e)}
            >
                Изменить пост
            </MyButton>
        </form>
    );
};

export default UpdatedPostForm;