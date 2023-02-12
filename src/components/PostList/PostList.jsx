import React from "react";
import PostCard from "../PostCard/PostCard";

const PostList = ({ posts, getOnePost, deletePost }) => {

    return (
        <>
            <center style={{ fontSize: '30px', margin: '20px' }}>Posts</center>
            <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
                {posts?.map(item => (
                    <PostCard key={item.id} item={item} getOnePost={getOnePost} deletePost={deletePost} />
            ))}
            </div>
        </>
    )
}

export default PostList;