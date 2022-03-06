import React, {useEffect, useState} from "react";
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
    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder={"Название поста"}/>
                <MyInput type="text" placeholder={"Описание поста"}/>
                <MyButton>Добавить пост</MyButton>
            </form>
            <PostList posts={posts} title={"Список постов"}/>
        </div>
    );
}

export default App;
