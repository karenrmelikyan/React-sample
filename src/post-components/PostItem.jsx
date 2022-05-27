import React from "react";

function PostItem({removePost, number, props}) {
    return(
        <div>
            <h1>{`${number}. ${props.title}`}</h1>
            <p>{props.body}</p>
            <button onClick={() => removePost(props.id)}>X</button>
        </div>
    );
}

export default PostItem;
