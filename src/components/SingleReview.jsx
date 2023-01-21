import { useEffect, useState } from "react";
import { fetchSingleReview } from "../utils/api";
import { useParams } from "react-router-dom";
import { Votes } from "./Votes";
import { WriteComment } from "./WriteComment";
import { CommentCards } from "./CommentCards";
import { Review } from "./Review";
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Divider } from "@mui/material";

export const SingleReview = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const { isLoggedIn, isError, setIsError } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState();

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
        setError(err.response);
      });
  }, [review_id]);

  if (isLoading) {
    return <p> Loading... </p>;
  }
  if (isError) {
    return (
      <Alert severity="error">
        {" "}
        <AlertTitle>
          <strong>{error.status}</strong>
        </AlertTitle>
        {error.data.msg}
        <Link to="/">
          <Button
            className="error-button"
            onClick={() => {
              setIsError(false);
            }}
          >
            Go Back
          </Button>
        </Link>
      </Alert>
    );
  }

  return (
    <main>
      <Review review={review} />

      <Votes
        className="votes titles"
        votes={review.votes}
        reviewId={review_id}
      />

      <Divider id="title-divider" />

      <h3 className="comment-title">Comments</h3>
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
        deleted={deleted}
      />
    </main>
  );
};
