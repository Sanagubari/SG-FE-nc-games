import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { postComment } from "../utils/api";
import { Alert } from "@mui/material";

export const WriteComment = ({ reviewId }) => {
  const [newComment, setNewComment] = useState("");
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isPosted, setIsPosted] = useState(true)

  const handleSubmit = (event) => {
    setIsPosted(false)
    event.preventDefault();
    postComment(newComment, "jessjelly", reviewId)
      .then(() => {
        setNewComment("");
        setSuccess(true);
        setIsError(false);
        setIsPosted(true)
      })
      .catch((err) => {
        setIsError(true);
        setSuccess(false);
        setIsPosted(true)
      });
  };


  return (
    <Form className="box" onSubmit={handleSubmit}>
      <p className="question">What are your thoughts?</p>
      <Form.Group className="mb-3" controlId="exampleComment.ControlTextarea1">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Write your comment"
          onChange={(event) => setNewComment(event.target.value)}
          value={newComment}
        />
      </Form.Group>
      {isPosted ? <Button variant="dark" type="submit" className="button"> Post </Button> : <Button variant="dark" type="submit" className="button" disabled> Post </Button>  }

  
      {success ? <Alert onClose={() => {setSuccess(false)}} className="alert" severity="success"> Comment posted </Alert> : null }
      {isError ? <Alert onClose={() => {setIsError(false)}} className="alert" severity="error"> Error, something went wrong </Alert> : null }
    </Form>
  );
};
