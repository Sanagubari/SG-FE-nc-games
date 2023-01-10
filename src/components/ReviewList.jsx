import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";

import { ReviewCard } from "./ReviewCard";


export const ReviewList = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews()
      .then((response) => {
        setIsLoading(false);
        setReviews(response);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error</p>;
  }
  return (
    <main>

      <h2 className="list-title">Latest Reviews</h2>
      <ul className="cardList">
        {reviews.map((review) => {
          return <ReviewCard key={review.title} {...review} />;
        })}
      </ul>
    </main>
  );
};
