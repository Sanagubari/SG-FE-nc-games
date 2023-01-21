import { createContext, useState } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [catIsLoading, setCatIsLoading] = useState(true);

 
  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        catIsLoading,
        setCatIsLoading,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  );
};
