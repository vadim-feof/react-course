import React, {useEffect, useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/Input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: '1aa', body: '431'},
        {id: 2, title: 'hh', body: 'gd'},
        {id: 3, title: 'cc', body: 'jdh'},
        {id: 4, title: 'll', body: 'tyz'}
    ])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter( p => p.id !== post.id))
    }

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    function getSortedPosts() {
        console.log("getSortedPosts")
        if (selectedSort)
            return [...posts].sort( (a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        return posts
    }
    const sortedPosts = useMemo( () => getSortedPosts(),
        [selectedSort, posts])

    const sortedAndFilteredPosts = useMemo( () => {
        return sortedPosts.filter( post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    const sortPosts = (sortType) => {
        setSelectedSort(sortType)
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput placeholder="Поиск..."
                         value={searchQuery}
                         onChange={e => setSearchQuery(e.target.value)}
                />
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
            {sortedAndFilteredPosts.length
                ?
                <PostList remove={removePost} posts={sortedAndFilteredPosts} title={"Список постов"}/>
                :
                <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }
        </div>
    );
}

export default App;
