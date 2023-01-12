import { Button } from "react-bootstrap";

export const CommentVotes = ({ votes }) => {
  return (
    <div className="comment-vote">
      <p className="sub-info">{votes}</p>
      <Button className="comment-vote-button" variant="light">
        👎
      </Button>{" "}
      <Button className="comment-vote-button" variant="dark">
        👍
      </Button>
    </div>
  );
};
