import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

function PostsList({posts, removePost}) {
    return (
        <TransitionGroup>
            {posts.map((post, index) =>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem removePost={removePost} number={index + 1} props={post} />
                </CSSTransition>
            )}
        </TransitionGroup>
    );
}

export default PostsList;