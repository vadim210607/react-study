import React from "react";
import PostItem from "./PostItem";

const PostList = function({posts, title}) {

    return (
        <div>
            <h1 style={{textAlign: 'center'}} >{ title }</h1>
            {posts.map((post_item, index) =>
                <PostItem number={index + 1} post={post_item} key={post_item.id}/>
            )}
        </div>

    )
    
}

export default PostList;