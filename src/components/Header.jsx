import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="Link">
        <h1 className="header-content">NC GAMES</h1>
      </Link>
      <Button className="header-content Login-Button" variant="light">
        Login
      </Button>{" "}
    </header>
  );
};
