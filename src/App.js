import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddPost from "./components/AddPost/AddPost";
import EditPost from "./components/EditPost/EditPost";
import PostList from "./components/PostList/PostList";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //! Edit
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [posts, setPosts] = useState([]);

  const [editedPost, setEditedPost] = useState({});

  function addPost(newObj) {
    let newPosts = [...posts];
    newPosts.push(newObj);
    setPosts(newPosts);

    //! setProducts([...products, newObj]);
  }

  function getOnePost(id) {
    let obj = posts.find((item) => item.id === id);
    setEditedPost(obj);
    setShowEditModal(handleEditShow);
  }

  function saveChanges(newObj) {
    let newPosts = posts.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      }
      return item;
    });
    setPosts(newPosts);
    setShowEditModal(false);
  }

  function deletePost(id) {
    let newPosts = posts.filter((item) => item.id != id);
    setPosts(newPosts);
  }

  return (
    <>
      <Header handleShow={handleShow} />
      <AddPost show={show} handleClose={handleClose} addPost={addPost} />
      <PostList posts={posts} getOnePost={getOnePost} deletePost={deletePost} />
      {showEditModal && (
        <EditPost
          showEditModal={showEditModal}
          handleEditClose={handleEditClose}
          editedPost={editedPost}
          saveChanges={saveChanges}
        />
      )}
    </>
  );
};

export default App;
