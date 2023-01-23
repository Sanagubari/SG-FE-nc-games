import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import { ReviewCard } from "./ReviewCard";
import { useSearchParams } from "react-router-dom";
import { Alert, AlertTitle } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { ReviewsContext } from "../contexts/Reviews";

export const ReviewList = () => {
  const { isError, setIsError } = useContext(UserContext);
  const { reviews, setReviews } = useContext(ReviewsContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order");

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    fetchReviews(categoryQuery, sortByQuery, orderByQuery)
      .then((allReviews) => {
        setIsLoading(false);
        setReviews(allReviews);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        setError(err.response);
      });
  }, [searchParams]);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  if (isError) {
    return (
      <Alert severity="error" className="errors">
        {" "}
        <AlertTitle>
          <strong>{error.status}</strong>
        </AlertTitle>
        {error.data.msg}
      </Alert>
    );
  }

  return (
    <div>
      <h2 className="list-title">
        {categoryQuery
          ? `${categoryQuery
              .replace(/-/g, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
              )} Reviews`
          : `All Reviews`}
      </h2>
      <ul className="cardList">
        {reviews.map((review) => {
          return <ReviewCard key={review.title} {...review} />;
        })}
      </ul>
    </div>
  );
};
