import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";
import { ReviewCard } from "./ReviewCard";
import { useSearchParams } from "react-router-dom";

export const ReviewList = ({ setIsError }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [searchParams] = useSearchParams();

  const categoryQuery = searchParams.get("category");
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order_by");

  useEffect(() => {
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
      });
  }, [searchParams]);

  if (isLoading) {
    return <p>Loading...</p>;
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
