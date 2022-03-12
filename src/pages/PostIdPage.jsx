import React, {useEffect, useState} from 'react';
import styles from "../components/PostList/PostItem/PostItem.module.css";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {useParams} from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
import Comment from "../components/Comment/Comment";

const PostIdPage = () => {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const {postId} = useParams()
    const [fetchPostById, isLoadingPost, postError] = useFetching(async (postId) => {
        const response = await PostService.getById(postId)
        setPost(response.data)
    })
    const [fetchCommentsById, isLoadingComm, commError] = useFetching(async (postId) => {
        const response = await PostService.getCommentsByPostId(postId)
        setComments(response.data)
    })
    useEffect( () => {
        fetchPostById(postId)
        fetchCommentsById(postId)
    }, [])
    return (
        <div style={{width: 800}}>
            <div className={styles.post}>
                {isLoadingPost
                    ? <Loader/>
                    :<div className={styles.content}>
                        <strong>{postId}. {post.title}</strong>
                        <div>
                            {post.body}
                        </div>
                    </div>
                }
            </div>
            Комментарии:
            {isLoadingComm
                ? <Loader/>
                : <div className={styles.commentsList}>
                    {comments.map( comm =>
                        <Comment
                            key={comm.id}
                            name={comm.name}
                            email={comm.email}
                            body={comm.body}
                        />
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;