import { NavBar } from "./NavBar";

import { ReviewList } from "./ReviewList";

export const ReviewPage = ({ setCategoryChosen }) => {
  return (
    <main>
      <NavBar setCategoryChosen={setCategoryChosen} />
      <ReviewList />
    </main>
  );
};
