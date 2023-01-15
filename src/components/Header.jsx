import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { Avatar } from "@mui/material";

export const Header = () => {
  const { userLogged, setUserLogged, isLoggedIn, setIsLoggedIn, setIsError } =
    useContext(UserContext);

  return (
    <header className="header">
      <Link to="/" className="Link" onClick={() => setIsError(false)}>
        <h1 className="header-content">NC GAMES</h1>
      </Link>
      {!isLoggedIn ? (
        <Link to="/login" className="Link">
          <Button className="header-content Login-Button" variant="light">
            Login
          </Button>{" "}
        </Link>
      ) : null}

      {isLoggedIn ? (
        <div className="Logged-in-user">
          <Avatar
            src={userLogged.avatar_url}
            alt={`${userLogged.username} profile picture`}
            sx={{ width: 23, height: 23 }}
          ></Avatar>

          <p className="white-text">
            {" "}
            <b>@</b>
            {userLogged.username}
          </p>
          <Button
            variant="dark button"
            className="header-content Logout-button "
            onClick={() => {
              setUserLogged(null);
              setIsLoggedIn(false);
            }}
          >
            Logout
          </Button>
        </div>
      ) : null}
    </header>
  );
};
