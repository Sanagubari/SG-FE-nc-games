import { Button } from "react-bootstrap";
import { useState } from "react";
import { patchVoteByReviewID } from "../utils/api";

export const Votes = ({ votes, reviewId }) => {
  const [voteChange, setVoteChange] = useState(0);

  function incVote() {
    setVoteChange((currVoteChange) => {
      return currVoteChange + 1;
    });

    patchVoteByReviewID(reviewId, 1).catch(() => {
      setVoteChange((currVoteChange) => currVoteChange - 1);
    });
  }

  function decVote() {
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
      <Button onClick={decVote} className="vote-button" variant="light">
        👎   
      </Button>{" "}
      <Button onClick={incVote} className="vote-button" variant="dark">
         👍
      </Button>
    </div>
  );
};
