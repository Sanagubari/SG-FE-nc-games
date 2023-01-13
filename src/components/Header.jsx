import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { Avatar } from "@mui/material";

export const Header = () => {
  const {
    userLogged,
    setUserLogged,
    isLoggedIn,
    setIsLoggedIn,
    isError,
    setIsError,
  } = useContext(UserContext);

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
        <Button
          variant="dark button"
          className="header-content "
          onClick={() => {
            setUserLogged(null);
            setIsLoggedIn(false);
          }}
        >
          Logout
        </Button>
      ) : null}

      {isLoggedIn ? (
        <div>
          <Avatar
            src={userLogged.avatar_url}
            alt={`${userLogged.username} profile picture`}
            sx={{ width: 24, height: 24 }}
          ></Avatar>

          <p className="white-text">
            {" "}
            Logged in as <b className="strong">@{userLogged.username}</b>
          </p>
        </div>
      ) : null}
    </header>
  );
};
