import React, {useEffect, useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript', body: 'Description'},
        {id: 3, title: 'Javascript', body: 'Description'},
        {id: 4, title: 'Javascript', body: 'Description'}
    ])

    const [newPost, setNewPost] = useState({title: '', body: ''})

    const createPost = (e) => {
        e.preventDefault()

        setPosts([...posts, {...newPost, id: Date.now()}])
        setNewPost({title: '', body: ''})
    }
    return (
        <div className="App">
            <form>
                <MyInput type="text"
                         placeholder={"Название поста"}
                         value={newPost.title}
                         onChange={event => setNewPost(
                             {...newPost, title: event.target.value})}
                />
                <MyInput type="text"
                         placeholder={"Описание поста"}
                         value={newPost.body}
                         onChange={event => setNewPost(
                             {...newPost, body: event.target.value})}
                />
                <MyButton onClick={(e) => createPost(e)}>Добавить пост</MyButton>
            </form>
            <PostList posts={posts} title={"Список постов"}/>
        </div>
    );
}

export default App;
