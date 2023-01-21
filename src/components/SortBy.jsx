import { fetchReviews } from "../utils/api";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useSearchParams } from "react-router-dom";

export const SortBy = () => {
  const [titles, setTitles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const sortByQuery = searchParams.get("sort_by");

  const setSortByQuery = (sortByQuery) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set("sort_by", sortByQuery);
    setSearchParams(newParams);
  };

  useEffect(() => {
    fetchReviews()
      .then((reviews) => {
        setIsLoading(false);
        const review = reviews[0];
        setTitles(Object.keys(review));
      })
      .catch((err) => {});
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {sortByQuery && sortByQuery !== "created_at" && sortByQuery === sortBy
          ? sortByQuery.charAt(0).toUpperCase() +
            sortByQuery.slice(1).replace(/_/g, " ")
          : "Sort By"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>{isLoading ? "Loading..." : null}</Dropdown.Item>
        {titles.map((title) => {
          const capitlised = title.charAt(0).toUpperCase() + title.slice(1);
          const titleName = capitlised.replace(/_/g, " ");
          return (
            <Dropdown.Item
              key={title}
              onClick={() => {
                setSortBy(title);
                setSortByQuery(title);
              }}
            >
              {titleName === "Created at" ? "Date (default)" : titleName}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
