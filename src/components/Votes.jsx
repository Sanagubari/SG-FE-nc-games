import { Button } from "react-bootstrap";
import { useState } from "react";
import { patchVoteByReviewID } from "../utils/api";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";

export const Votes = ({ votes, reviewId }) => {
  const [voteChange, setVoteChange] = useState(0);
  const { isLoggedIn } = useContext(UserContext);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);

  function incVote() {
    setHasVoted(true);
    setIsLiked(true);

    setVoteChange((currVoteChange) => {
      return currVoteChange + 1;
    });

    patchVoteByReviewID(reviewId, 1).catch(() => {
      setVoteChange((currVoteChange) => currVoteChange - 1);
    });
  }

  function decVote() {
    setIsDownVoted(true);
    setHasVoted(true);
    setVoteChange((currVoteChange) => {
      return currVoteChange - 1;
    });

    patchVoteByReviewID(reviewId, -1).catch(() => {
      setVoteChange((currVoteChange) => currVoteChange + 1);
    });
  }

  return (
    <div>
      <p className="votes-title">
        Total votes: <b className="emphasise">{votes + voteChange}</b>
      </p>
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
