import React, {useEffect, useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/Input/MyInput";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: '1aa', body: '431'},
        {id: 2, title: 'hh', body: 'gd'},
        {id: 3, title: 'cc', body: 'jdh'},
        {id: 4, title: 'll', body: 'tyz'}
    ])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalVisible(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter( p => p.id !== post.id))
    }

    const [filter, setFilter] = useState({sortBy: '', searchQuery: ''})
    function getSortedPosts() {
        if (filter.sortBy)
            return [...posts].sort( (a, b) => a[filter.sortBy].localeCompare(b[filter.sortBy]))
        return posts
    }
    const sortedPosts = useMemo( () => getSortedPosts(),
        [filter.sortBy, posts])
    const sortedAndFilteredPosts = useMemo( () => {
        return sortedPosts.filter( post =>
            post.title.toLowerCase().includes(filter.searchQuery.toLowerCase()))
    }, [filter.searchQuery, sortedPosts])

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModalVisible(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modalVisible}
                     setVisible={setModalVisible}
            >
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter}
                        setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndFilteredPosts} title={"Список постов"}/>
        </div>
    );
}

export default App;
