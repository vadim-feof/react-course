import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import MySelect from "./components/UI/Select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: '1aa', body: '431'},
        {id: 2, title: 'hh', body: 'gd'},
        {id: 3, title: 'cc', body: 'jdh'},
        {id: 4, title: 'll', body: 'tyz'}
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter( p => p.id !== post.id))
    }

    const sortPosts = (sortType) => {
        setSelectedSort(sortType)
        setPosts([...posts].sort( (a, b) => a[sortType].localeCompare(b[sortType])))
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    defaultValue={"Сортировка"}
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}
                    ]}
                    value={selectedSort}
                    onChange={sortPosts}
                />
            </div>
            {posts.length
                ?
                <PostList remove={removePost} posts={posts} title={"Список постов"}/>
                :
                <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }
        </div>
    );
}

export default App;
