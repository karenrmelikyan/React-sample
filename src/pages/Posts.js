import React, {useEffect, useState} from "react";
import PostsList from "../post-components/PostsList";
import PostForm from "../post-components/PostForm";
import PostSelect from "../post-components/PostSelect";
import PostsSearch from "../post-components/PostsSearch";
import MyModal from "../post-components/UI/modal/MyModal";
import usePostsSearch from "../post-components/hooks/usePostsSearch";
import '../post-components/UI/app.css';
import {data} from "../post-components/storage/storage";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [active, setActive] =useState(false);

    const searchedPosts = usePostsSearch(posts, searchQuery);

    useEffect(() => {
        setPosts(data);
    }, []);

    function sortPosts(value) {
        if (posts.length > 1) {
            setPosts([...posts].sort((a, b) => a[value].localeCompare(b[value])));
        }
    }

    function removePost(id) {
        setPosts(posts.filter((post) => post.id !== id));
    }

    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    return(
        <div style={{textAlign: 'center'}}>

            <MyModal active={active} setActive={setActive}>
                <PostForm createPost={createPost}/>
            </MyModal>

            <button onClick={() => setActive(true)}>Add Posts</button>

            <PostsSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

            <PostSelect options={[
                {value: 'title', name: 'title'},
                {value: 'body', name: 'body'}
            ]} sortPosts={sortPosts} />

            {
                searchedPosts.length > 0
                    ? <PostsList posts={searchedPosts} removePost={removePost}/>
                    : <h2>Posts don't exists</h2>
            }

        </div>
    );
}

export default Posts;