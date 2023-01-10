import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const WriteComment = () => {
  return (
    
    <Form className='box'>
        <p className="question" >What are your thoughts?</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter username" />
        <Form.Text className="text-muted"> </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicComment">
        <Form.Label>Comment</Form.Label>
        <Form.Control type="email" placeholder="Write your comment" />
      </Form.Group>
      <Button variant="dark" type="submit" className="button">
        Post
      </Button>
    </Form>
  );
};
