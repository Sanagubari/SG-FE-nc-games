import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import { Divider } from "@mui/material";
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
            <Divider id='divider'/>
          </li>
        );
      })}
    </ul>
  );
};
