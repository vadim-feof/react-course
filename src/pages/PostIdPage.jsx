import React, {useEffect, useState} from 'react';
import styles from "../components/PostList/PostItem/PostItem.module.css";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {useParams} from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
import Comment from "../components/Comment/Comment";

const PostIdPage = () => {
    const [post, setPost] = useState({})
    const {postId} = useParams()
    const [fetchPostById, isLoadingPost, postError] = useFetching(async (postId) => {
        const response = await PostService.getById(postId)
        setPost(response.data)
    })
    useEffect( () => {
        fetchPostById(postId)
    }, [])
    return (
        <div style={{width: 800}}>
            <div className={styles.post}>
                {isLoadingPost
                    ? <Loader/>
                    :<div className={styles.content}>
                        <strong>{post.title}</strong>
                        <div>
                            {post.body}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default PostIdPage;