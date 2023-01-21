import { NavBar } from "./NavBar";
import { Button } from "react-bootstrap";
import { ReviewList } from "./ReviewList";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { useContext } from "react";

export const ReviewPage = ({ setCategoryChosen }) => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <main>
      {isLoggedIn ? (
        <Link to="/writeReview">
          <Button className="write-a-review">Write a Review</Button>
        </Link>
      ) : null}

      <NavBar setCategoryChosen={setCategoryChosen} />
      <ReviewList />
    </main>
  );
};
