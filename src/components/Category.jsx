import { fetchCategories } from "../utils/api";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export const CategoryBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((categories) => {
        setCategories(categories);
      })
      .catch((err) => {});
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {categories.map((category) => {
          const capitlised =
            category.slug.charAt(0).toUpperCase() + category.slug.slice(1);
          const categoryName = capitlised.replace(/-/g, " ");
          return (
            <Dropdown.Item key={category.slug} href="#/action-1">
              {categoryName}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
