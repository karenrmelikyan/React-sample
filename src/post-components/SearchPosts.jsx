import React from 'react';

function SearchPosts({searchQuery, setSearchQuery}) {
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

export default SearchPosts;