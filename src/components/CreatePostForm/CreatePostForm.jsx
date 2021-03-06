import React, {useEffect, useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";

const CreatePostForm = ({create}) => {

    const [post, setPost] = useState({
        author: localStorage.getItem('username'),
        title: '',
        body: ''
    })

    const checkBtnDisabled = !(post.author && post.body && post.title)

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post
        }
        create(newPost)
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
                      onClick={(e) => addNewPost(e)}
            >
                Добавить пост
            </MyButton>
        </form>
    );
};

export default CreatePostForm;