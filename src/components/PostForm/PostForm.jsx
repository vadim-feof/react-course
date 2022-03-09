import React, {useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})
    const checkBtnDisabled = !(post.title && post.body)
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
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
            <MyButton disabled={checkBtnDisabled} onClick={(e) => addNewPost(e)}>Добавить пост</MyButton>
        </form>
    );
};

export default PostForm;