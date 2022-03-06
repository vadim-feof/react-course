import React from 'react';
import PostItem from "./PostItem/PostItem";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem key={post.id} number={index + 1} post={post}/>
            )}
        </div>
    );
};

export default PostList;