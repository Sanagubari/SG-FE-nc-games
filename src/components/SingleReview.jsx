import { useEffect, useState } from "react";
import { fetchSingleReview } from "../utils/api";
import { useParams } from "react-router-dom";
import { Votes } from "./Votes";
import { WriteComment } from "./WriteComment";
import { CommentCards } from "./CommentCards";
import { Review } from "./Review";

export const SingleReview = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState([]);
  let { review_id } = useParams();

  useEffect(() => {
    fetchSingleReview(review_id)
      .then((reviewData) => {
        setIsLoading(false);
        setReview(reviewData);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }

  return (
    <main>
      <Review review={review} />

      <Votes
        className="votes titles"
        votes={review.votes}
        reviewId={review_id}
      />

      <h3 className="titles">Comments</h3>

      <WriteComment />
      <CommentCards reviewId={review_id} />
    </main>
  );
};
