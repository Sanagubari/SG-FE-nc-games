import { CategoryBar } from "./Category";
import { OrderBy } from "./OrderBy";
import { SortBy } from "./SortBy";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export const NavBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentParams = [...searchParams];


  return (
    <nav className="Nav">
      <CategoryBar className="Dropdown" />
      <SortBy className="Dropdown" />
      <OrderBy className="Dropdown" />
      {currentParams.length !== 0 ? (
        <Button
          variant="secondary"
          onClick={() => {
            setSearchParams();
          }}
        >
          Reset Filters
        </Button>
      ) : null}
    </nav>
  );
};
