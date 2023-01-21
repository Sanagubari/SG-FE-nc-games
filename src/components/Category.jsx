import { fetchCategories } from "../utils/api";
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../contexts/Categories";

export const CategoryBar = () => {
  const { categories, setCategories, catIsLoading, setCatIsLoading } =
    useContext(CategoriesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryChosen, setCategoryChosen] = useState();

  const categoryQuery = searchParams.get("category");

  const setCategory = (category) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set("category", category);
    setSearchParams(newParams);
  };

  const removeCategory = () => {
    const newParams = new URLSearchParams(searchParams);

    newParams.delete("category");
    setSearchParams(newParams);
  };

  useEffect(() => {
    fetchCategories()
      .then((categories) => {
        setCatIsLoading(false);
        setCategories(categories);
      })
      .catch((err) => {});
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {categoryQuery && categoryQuery === categoryChosen
          ? categoryQuery.charAt(0).toUpperCase() +
            categoryQuery.slice(1).replace(/-/g, " ")
          : "Category"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            removeCategory();
          }}
        >
          {catIsLoading ? "Loading..." : "All"}
        </Dropdown.Item>

        {categories.map((category) => {
          const capitlised =
            category.slug.charAt(0).toUpperCase() + category.slug.slice(1);
          const categoryName = capitlised.replace(/-/g, " ");
          return (
            <Dropdown.Item
              key={category.slug}
              onClick={() => {
                setCategoryChosen(category.slug);
                setCategory(category.slug);
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
