import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const PostCard = ({ item, getOnePost, deletePost }) => {
  const [like, setLike] = useState(false);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <div>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>Description: {item.desc}</Card.Text>
        </div>
        <div>
          <Button variant="outline-danger" onClick={() => deletePost(item.id)}>
            Delete
          </Button>
          <Button variant="outline-dark" onClick={() => getOnePost(item.id)}>
            Edit
          </Button>
          <h5 onClick={() => setLike(!like)}>{like ? "❤️" : "🤍"}</h5>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
