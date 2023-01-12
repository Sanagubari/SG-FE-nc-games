import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import { Divider } from "@mui/material";
import { CommentVotes } from "./CommentVotes";
import { deleteComment } from "../utils/api";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";

export const CommentCards = ({ reviewId, user }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const isLoggedIn = user !== null;

  useEffect(() => {
    fetchComments(reviewId)
      .then((allComments) => {
        setIsLoading(false);
        setComments(allComments);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [reviewId, comments]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }
  return (
    <ul>
      {comments.map((comment) => {
        let date = comment.created_at
          .slice(0, 10)
          .replace(/-/g, " ")
          .split(" ");

        let realDate = `${date[2]}/${date[1]}/${date[0]}`;
        return (
          <li key={comment.comment_id}>
            <div id="comment-sub-info">
              <h4 className=" sub-info emphasise">@{comment.author}</h4>
              <p className=" sub-info">{realDate}</p>
            </div>
            <p className="comment">"{comment.body}"</p>

            <CommentVotes votes={comment.votes} />
            {isLoggedIn && user.username === comment.author ? (
              <Button
                disabled={isDeleting}
                variant="dark button"
                className="Read-More"
                onClick={() => {
                  setIsDeleting(true);
                  deleteComment(comment.comment_id).then(setIsDeleting(false));
                  setDeleted(true);
                }}
              >
                {isDeleting ? "Deleting…" : "Delete"}
              </Button>
            ) : null}

            {deleted ? (
              <Alert
                onClose={() => {
                  setDeleted(false);
                }}
                className="alert"
                severity="success"
              >
                {" "}
                Comment deleted{" "}
              </Alert>
            ) : null}

            <Divider id="divider" />
          </li>
        );
      })}
    </ul>
  );
};
