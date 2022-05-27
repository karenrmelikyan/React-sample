import React, {useMemo, useState} from "react";
import PostsList from "./PostsList";
import PostForm from "./PostForm";
import PostSelect from "./PostSelect";
import SearchPosts from "./SearchPosts";
import MyModal from "./UI/modal/MyModal";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [active, setActive] =useState(false);

    const searchedPosts = useMemo(() => {
        if(searchQuery) {
            return posts.filter((post) => post.title.includes(searchQuery));
        }
        return posts;
    }, [searchQuery, posts])

    function sortPosts(value) {
        if (posts.length > 1) {
            setPosts([...posts].sort((a, b) => a[value].localeCompare(b[value])));
        }
    }

    function removePost(id) {
        setPosts(posts.filter((post) => post.id !== id));
    }

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    return(
        <div style={{textAlign: 'center'}}>

            <MyModal active={active} setActive={setActive}>
                <PostForm createPost={createPost}/>
            </MyModal>

            <button onClick={() => setActive(true)}>Add Posts</button>

            <SearchPosts searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

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