import React from "react";


const PostItem = function(props) {

    return (

        <div className="post">
            <div className="post_content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post_btn">
                <button>Видалити</button>
            </div>
        </div>

    )
}

export default PostItem;