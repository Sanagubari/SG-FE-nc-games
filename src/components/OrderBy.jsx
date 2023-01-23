import Dropdown from "react-bootstrap/Dropdown";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchReviews } from "../utils/api";

export const OrderBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const orderByQuery = searchParams.get("order_by");

  const setOrderByQuery = (orderByQuery) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set("order_by", orderByQuery);
    setSearchParams(newParams);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchReviews()
      .then((reviews) => {
        setIsLoading(false);
      })
      .catch((err) => {});
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className="Dropdown"
      >
        {(orderByQuery && orderByQuery === "asc") || orderByQuery === "desc"
          ? orderByQuery.charAt(0).toUpperCase() +
            orderByQuery.slice(1).replace(/-/g, " ")
          : "Order"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            setOrderByQuery("desc");
          }}
        >
          Desc (default)
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setOrderByQuery("asc");
          }}
        >
          Asc
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
