import React, { useState } from "react";
import { Button, Modal, FormControl } from 'react-bootstrap';

const EditPost = ({ showEditModal, handleEditClose, editedPost, saveChanges }) => {
    const[post, setPost] = useState(editedPost);

    const handleInput = e => {
        let newObj = {
            ...post,
            [e.target.name]: e.target.value
        };
        setPost(newObj);
    };

    function saveEditedPost() {
        for(let i in post) {
            if(post[i] === '') {
                alert('Some input are empty!');
                return;
            };
        };
        saveChanges(post);

    }
     
    return (
        <>
        <Modal show={showEditModal} onHide={handleEditClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form">
                        <FormControl size='lg' className="my-3" placeholder="Title" value={post.title} name="title" onChange={handleInput} />
                        <FormControl size='lg' className="my-3" placeholder="Desc" value={post.desc} name="desc" onChange={handleInput} />
                        <FormControl size='lg' className="my-3" placeholder="Image" value={post.image} name="image" onChange={handleInput} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleEditClose}>
                        Myrzaiym
                    </Button>
                    <Button variant="outline-success" onClick={saveEditedPost}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default EditPost;