import React from "react";
import {useNavigate} from "react-router-dom";

function PostItem({removePost, number, props}) {
    const navigate = useNavigate();

    function openPost(id) {
        navigate(`/post/${id}`)
    }

    return(
        <div>
            <h1>{`${number}. ${props.title}`}</h1>
            <p>{props.body}</p>
            <button onClick={() => openPost(props.id)}>Read all</button>
            <button onClick={() => removePost(props.id)}>X</button>
        </div>
    );
}

export default PostItem;