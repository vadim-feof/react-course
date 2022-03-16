import React from 'react';
import PostItem from "./PostItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove, isLoading}) => {
    if (posts.length === 0)
        return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition key={post._id} timeout={400} classNames="post">
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