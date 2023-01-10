import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";

import { CommentVotes } from "./CommentVotes";

export const CommentCards = ({ reviewId }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

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
  }, [reviewId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }
  return (
    <div>
      {comments.map((comment) => {
        let date = comment.created_at
          .slice(0, 10)
          .replace(/-/g, " ")
          .split(" ");

        let realDate = `${date[2]} ${date[1]} ${date[0]}`;
        return (
          <div key={comment.comment_id}>
            <p>{comment.body}</p>
            <h4>{comment.author}</h4>
            <p>{realDate}</p>
            <CommentVotes votes={comment.votes} />
          </div>
        );
      })}
    </div>
  );
};
