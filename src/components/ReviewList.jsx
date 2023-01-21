import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import { ReviewCard } from "./ReviewCard";
import { useSearchParams } from "react-router-dom";
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { ReviewsContext } from "../contexts/Reviews";

export const ReviewList = () => {
  const { isError, setIsError } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [error, setError] = useState();
  const { reviews, setReviews } = useContext(ReviewsContext);

  const categoryQuery = searchParams.get("category");
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order_by");

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
      <Alert severity="error">
        {" "}
        <AlertTitle>
          <strong>{error}</strong>
        </AlertTitle>
        {error}
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
