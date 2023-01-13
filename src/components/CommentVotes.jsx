import { Button } from "react-bootstrap";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { patchVoteByCommentId } from "../utils/api";
import { Alert } from "@mui/material";

export const CommentVotes = ({ votes, commentId }) => {
  const [voteChange, setVoteChange] = useState(0);
  const { userLogged, isLoggedIn} = useContext(UserContext);
  const [hasVoted, setHasVoted] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);


  function incVote() {
    setHasVoted(true);
    setIsLiked(true);
    setVoteChange((currVoteChange) => {
      return currVoteChange + 1;
    });

    patchVoteByCommentId(commentId, 1).catch(() => {
      setVoteChange((currVoteChange) => currVoteChange - 1);
    });
  }

  function decVote() {
    setIsDownVoted(true);
    setHasVoted(true);
    setVoteChange((currVoteChange) => {
      return currVoteChange - 1;
    });

    patchVoteByCommentId(commentId, -1).catch(() => {
      setVoteChange((currVoteChange) => currVoteChange + 1);
      setHasVoted(true);
    });
  }

  return (
    <div className="comment-vote">
      <p className="sub-info">{votes + voteChange}</p>
      {isLoggedIn ? (
        <div>
          {!isLiked ? (
            <Button onClick={incVote} className="vote-button" variant="dark">
              Upvote
            </Button>
          ) : (
            <Button
              onClick={incVote}
              className="vote-button"
              variant="dark"
              disabled
            >
              Upvote
            </Button>
          )}
          {!isDownVoted ? (
            <Button onClick={decVote} className="vote-button" variant="light">
              Downvote
            </Button>
          ) : (
            <Button
              onClick={decVote}
              className="vote-button"
              variant="light"
              disabled
            >
              Downvote
            </Button>
          )}
        </div>
      ) : (
        <Link to="/login">
          <Button>Login to Vote</Button>
        </Link>
      )}

      {hasVoted && isLoggedIn ? (
        <Alert className="alert" severity="success">
          {" "}
          Thanks for Voting{" "}
        </Alert>
      ) : null}
    </div>
  );
};
