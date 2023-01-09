import { fetchReviews } from "../utils/api";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export const SortBy = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetchReviews()
      .then((reviews) => {
        const review = reviews[0];
        setTitles(Object.keys(review));
      })
      .catch((err) => {});
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {titles.map((title) => {
              const capitlised =
              title.charAt(0).toUpperCase() + title.slice(1);
            const titleName = capitlised.replace(/_/g, " ");
          return (
            <Dropdown.Item key={title} href="#/action-1">
              {titleName}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
