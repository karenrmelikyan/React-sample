import {useMemo} from 'react';

function usePostsSearch(posts, searchQuery) {
    const searchedPosts = useMemo(() => {
        if(searchQuery) {
            return posts.filter((post) => post.title.includes(searchQuery));
        }
        return posts;
    }, [searchQuery, posts])

    return searchedPosts;
}

export default usePostsSearch;