import React from 'react';
import PostItem from "./PostItem/PostItem";

const PostList = ({posts, title, remove}) => {
    if (posts.length === 0) return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem key={post.id} remove={remove} number={index + 1} post={post}/>
            )}
        </div>
    );
};

export default PostList;