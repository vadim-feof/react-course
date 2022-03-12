import React, {useEffect, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";
import MyButton from "../components/UI/Button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm/PostForm";
import PostFilter from "../components/PostFilter/PostFilter";
import Pagination from "../components/UI/Pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList/PostList";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sortBy: '', searchQuery: ''})
    const [modalVisible, setModalVisible] = useState(false)
    const sortedAndFilteredPosts = usePosts(posts, filter.sortBy, filter.searchQuery)

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)

    const [fetchPosts, isLoadingPosts, postError] = useFetching( async (limit, currentPage) => {
        const response = await PostService.getAll(limit, currentPage)
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalVisible(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter( p => p.id !== post.id))
    }

    useEffect( () => {
        fetchPosts(limit, currentPage)
    }, [currentPage])

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
            {postError && <h1>{postError}</h1>}
            <Pagination totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}/>
            {isLoadingPosts
                ? <div className="loader"><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndFilteredPosts} title={"Список постов"}/>
            }
        </div>
    );
};

export default Posts;