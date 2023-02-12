import React, { useState } from "react";
import { Button, Modal, FormControl } from 'react-bootstrap';

const AddPost = ({ show, handleClose, addPost }) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

    function createPost() {
        if(!title || !desc || !image) {
            alert('some input are empty!');
            return;
        };

        let newObj = {
            title,
            desc,
            image,
            id: Date.now()
        };

        addPost(newObj);

        setTitle('');
        setDesc('');
        setImage('');

        handleClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form">
                        <FormControl size='lg' className="my-3" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                        <FormControl size='lg' className="my-3" placeholder="Desc" value={desc} onChange={e => setDesc(e.target.value)} />
                        <FormControl size='lg' className="my-3" placeholder="Image" value={image} onChange={e => setImage(e.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-success" onClick={createPost}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default AddPost;