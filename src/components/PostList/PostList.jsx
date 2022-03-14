import React from 'react';
import PostItem from "./PostItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, defaultPosts, title, remove, isLoading}) => {
    if (defaultPosts.length === 0)
        return <h1 style={{textAlign: 'center'}}>Загрузка...</h1>
    if (posts.length === 0)
        return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition key={post.id} timeout={400} classNames="post">
                        <PostItem
                            remove={remove}
                            number={index + 1}
                            post={post}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;