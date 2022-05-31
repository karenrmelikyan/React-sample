import React from 'react';

function PostsSearch({searchQuery, setSearchQuery}) {
    return (
        <div>
            <input
                type={'text'}
                placeholder={'Search...'}
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
            />
        </div>
    );
}

export default PostsSearch;