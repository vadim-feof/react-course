import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";
import MyButton from "../components/UI/Button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import CreatePostForm from "../components/CreatePostForm/CreatePostForm";
import PostFilter from "../components/PostFilter/PostFilter";
import Pagination from "../components/UI/Pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList/PostList";
import {useObserver} from "../hooks/useObserver";
import {AuthContext} from "../context/context";
import AuthService from "../API/AuthService";
import UpdatePostForm from "../components/UpdatePostForm/UpdatePostForm";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sortBy: '', searchQuery: ''})
    const [createPostModal, setCreatePostModal] = useState(false)
    const [updatePostVisible, setUpdatePostVisible] = useState(false)
    const sortedAndFilteredPosts = usePosts(posts, filter.sortBy, filter.searchQuery)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(5)
    const [selectedPost, setSelectedPost] = useState(null)

    const [fetchPosts, isLoadingPosts, postError] = useFetching( async (limit, currentPage) => {
        const response = await PostService.getAll(limit, currentPage)
        setPosts([...response.data]);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    const createPost = async (newPost) => {
        const response = await PostService.createPost(newPost)
        if (posts.length === limit)
            setCurrentPage(currentPage + 1)
        else
            setPosts([...posts, response.data])
        setCreatePostModal(false)
    }

    const removePost = async (post) => {
        const response = await PostService.deletePost(post._id)
        const deletedPost = response.data
        setPosts(posts.filter( p => p._id !== deletedPost._id))
    }

    const updatePost = async (post) => {
        const response = await PostService.updatePost(post)
        const updatedPost = response.data
        setPosts(posts => {
            const newPosts = posts.map(post => {
                if (post._id === updatedPost._id)
                    return updatedPost
                return post
            })
            return newPosts
        })
        setUpdatePostVisible(false)
    }

    useEffect( async () => {
        fetchPosts(limit, currentPage)
    }, [currentPage])

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setCreatePostModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={createPostModal}
                     setVisible={setCreatePostModal}
            >
                <CreatePostForm create={createPost}/>
            </MyModal>
            <MyModal visible={updatePostVisible}
                     setVisible={setUpdatePostVisible}
            >
                <UpdatePostForm update={updatePost} selectedPost={selectedPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter}
                        setFilter={setFilter}
            />
            {postError && <h1>{postError}</h1>}
            {<Pagination totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}/>}

            {isLoadingPosts
                ? <div className="loader"><Loader/></div>
                : <PostList
                    update={(post) => {
                        setSelectedPost(post)
                        setUpdatePostVisible(true)
                    }}
                    remove={removePost}
                    posts={sortedAndFilteredPosts}
                    title={"Список постов"}
                    isLoading={isLoadingPosts}
                />
            }
        </div>
    );
};

export default Posts;