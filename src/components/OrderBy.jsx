import Dropdown from "react-bootstrap/Dropdown";

export const OrderBy = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="Dropdown">
        Order
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Asc</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Dsc</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
