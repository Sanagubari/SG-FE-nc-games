import { CategoryBar } from "./Category";
import { OrderBy } from "./OrderBy";
import { SortBy } from "./SortBy";

export const NavBar = () => {
  return (
    <nav className="Nav">
      <CategoryBar className="Dropdown" />
      <SortBy className="Dropdown" />
      <OrderBy className="Dropdown" />
    </nav>
  );
};
