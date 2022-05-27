import React, {useState} from 'react';

function PostForm({createPost}) {
    const [post, setPost] = useState({id: 0, title: '', body: ''})

    function addPost() {
        const newPost = {
            ...post, id: Date.now()
        }

        if (newPost.title.length > 0 && newPost.body.length > 0) {
            createPost(newPost);
            setPost({id: 0, title: '', body: ''});
        }
    }

    return (
        <div>
            <input type={'text'} placeholder={'Title'} value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            <input type={'text'} placeholder={'Body'} value={post.body} onChange={e => setPost({...post, body: e.target.value})}/>
            <button onClick={addPost}>Add</button>
        </div>
    );
}

export default PostForm;