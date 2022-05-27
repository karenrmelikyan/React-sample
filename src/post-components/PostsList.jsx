import React from 'react';
import PostItem from "./PostItem";

function PostsList({posts, removePost}) {
    return (
        <div>
            {posts.map((post, index) => <PostItem removePost={removePost} number={index + 1} props={post} key={post.id}/>)}
        </div>
    );
}

export default PostsList;