import React from 'react';

function PostSelect({options, sortPosts})  {
    return (
        <select onChange={(e) => sortPosts(e.target.value)}>
            <option disabled value={''}>Sorting by</option>
            {
                options.map((option) => {
                   return <option value={option.value} key={option.value}>
                       {option.name}
                    </option>
                })
            }
        </select>
    );
}

export default PostSelect;