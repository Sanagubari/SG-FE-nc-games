import { useEffect, useState } from "react";
import { fetchSingleReview } from "../utils/api";
import { useParams } from "react-router-dom";
import { Votes } from "./Votes";
import { WriteComment } from "./WriteComment";
import { CommentCards } from "./CommentCards";
import { Review } from "./Review";
import { CircularProgress } from "@mui/material";
import { Alert } from "@mui/material";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const SingleReview = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const { isLoggedIn } = useContext(UserContext);
  const [comments, setComments] = useState([]);

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
    return <CircularProgress className="loading" />;
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
      {isLoggedIn ? (
        <WriteComment
          reviewId={review_id}
          comments={comments}
          setComments={setComments}
        />
      ) : (
        <div className="box">
          <p className="question">What are your thoughts?</p>{" "}
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      )}

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
      <CommentCards
        reviewId={review_id}
        setDeleted={setDeleted}
        comments={comments}
        setComments={setComments}
      />
    </main>
  );
};
