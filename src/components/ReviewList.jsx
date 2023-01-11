import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import { NavBar } from "./NavBar";
import { ReviewCard } from "./ReviewCard";
import { useSearchParams } from "react-router-dom";
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";

export const ReviewList = ({ setCategoryChosen }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryQuery = searchParams.get("category");

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(categoryQuery)
      .then((allReviews) => {
        setIsLoading(false);
        setReviews(allReviews);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [searchParams]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <Alert severity="error">
        {" "}
        <AlertTitle>
          <strong>404</strong>
        </AlertTitle>
        Something went wrong
      </Alert>
    );
  }

  return (
    <main>
      <NavBar
        setCategoryChosen={setCategoryChosen}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      <h2 className="list-title">
        {categoryQuery
          ? `${categoryQuery
              .replace(/-/g, " ")
              .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                letter.toUpperCase()
              )} Reviews`
          : `Latest Reviews`}
      </h2>
      <ul className="cardList">
        {reviews.map((review) => {
          return <ReviewCard key={review.title} {...review} />;
        })}
      </ul>
    </main>
  );
};
