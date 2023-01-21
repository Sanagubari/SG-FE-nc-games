import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import { Divider } from "@mui/material";
import { CommentVotes } from "./CommentVotes";
import { deleteComment } from "../utils/api";
import { Button } from "react-bootstrap";
import { UserContext } from "../contexts/User";
import { useContext } from "react";

export const CommentCards = ({
  reviewId,
  setDeleted,
  comments,
  setComments,
}) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [isDeleting, setIsDeleting] = useState(false);
  const { userLogged, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    setDeleted(false);
    setIsLoading(true);
    setIsError(false);
    fetchComments(reviewId)
      .then((allComments) => {
        setIsLoading(false);
        setComments(allComments);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [reviewId]);

  function handleDelete(commentId) {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      setIsDeleting(true);
      deleteComment(commentId).then(() => {
        setComments((currComments) => {
          return currComments.filter((comm) => {
            return comm.comment_id !== commentId;
          });
        });
        setIsDeleting(false);
        setDeleted(true);
      });
    }
  }

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
          <li key={comment.comment_id} className="comment-list-item">
            <div id="comment-sub-info">
              <h4 className="emphasise">@{comment.author}</h4>

              <p className=" sub-info">{realDate}</p>
            </div>

            <p className="comment">"{comment.body}"</p>

            <CommentVotes
              className="comment-vote-buttons"
              votes={comment.votes}
              commentId={comment.comment_id}
            />
            {/*ternary to display delete button if that author is logged in.*/}
            {isLoggedIn && userLogged.username === comment.author ? (
              <div className="delete-button">
                <Button
                  disabled={isDeleting}
                  variant="light"
                  className="delete-button"
                  onClick={() => handleDelete(comment.comment_id)}
                >
                  {isDeleting ? "Deleting…" : "Delete"}
                </Button>{" "}
              </div>
            ) : null}

            <Divider id="divider" />
          </li>
        );
      })}
    </ul>
  );
};
