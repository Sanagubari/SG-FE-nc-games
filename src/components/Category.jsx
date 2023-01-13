import { fetchCategories } from "../utils/api";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useSearchParams } from "react-router-dom";

export const CategoryBar = ({ setCategoryChosen, setSearchParams, searchParams }) => {
  const [categories, setCategories] = useState([]);



  const setCategory = (category) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set("category", category);
    setSearchParams(newParams);
    
  };

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
        <Dropdown.Item
          onClick={() => {
            setSearchParams();
            setCategoryChosen(null);
          }}
        >
          All
        </Dropdown.Item>

        {categories.map((category) => {
          const capitlised =
            category.slug.charAt(0).toUpperCase() + category.slug.slice(1);
          const categoryName = capitlised.replace(/-/g, " ");
          return (
            <Dropdown.Item
              key={category.slug}
              onClick={() => {
                setCategory(category.slug);
                setCategoryChosen(category.slug);
              }}
            >
              {categoryName}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
