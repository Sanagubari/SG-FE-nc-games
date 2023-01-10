import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const ReviewCard = (review) => {
  return (
    <li className="card">
      <img
        src={review.review_img_url}
        alt={`${review.title} cover Image`}
        className="reviewPic"
      />
      <h3>{review.title}</h3>
      <p className="author">{review.owner}</p>
      <Link to={`/games/${review.review_id}`}>
        <Button variant="dark button" className="Read-More">
          Read More
        </Button>{" "}
      </Link>
    </li>
  );
};
