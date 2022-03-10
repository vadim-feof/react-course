import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/Loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sortBy: '', searchQuery: ''})
    const [modalVisible, setModalVisible] = useState(false)
    const sortedAndFilteredPosts = usePosts(posts, filter.sortBy, filter.searchQuery)
    const [fetchPosts, isLoadingPosts, postError] = useFetching( async () => {
        const posts = await PostService.getAll()
        setPosts(posts);
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalVisible(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter( p => p.id !== post.id))
    }

    useEffect( () => {
        fetchPosts()
    }, [])

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
            {isLoadingPosts
                ? <div className="loader"><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndFilteredPosts} title={"Список постов"}/>
            }
        </div>
    );
}

export default App;
