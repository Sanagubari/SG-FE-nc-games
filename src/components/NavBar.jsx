import { CategoryBar } from "./Category";
import { OrderBy } from "./OrderBy";
import { SortBy } from "./SortBy";

export const NavBar = ({ setCategoryChosen, setSearchParams, searchParams}) => {
  return (
    <nav className="Nav">
      <CategoryBar className="Dropdown" setCategoryChosen={setCategoryChosen} setSearchParams={setSearchParams} searchParams={searchParams}/>
      <SortBy className="Dropdown" />
      <OrderBy className="Dropdown" />
    </nav>
  );
};
