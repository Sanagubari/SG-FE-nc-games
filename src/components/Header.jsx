import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { Avatar } from "@mui/material";
import styled from "styled-components";

const Paragraph = styled.p`
  @media (min-width: 600px) {
    display: block;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Header = () => {
  const { userLogged, setUserLogged, isLoggedIn, setIsLoggedIn, setIsError } =
    useContext(UserContext);

  function handleLogout() {
    if (window.confirm("Are you sure you want to logout?")) {
      {
        setUserLogged(null);
        setIsLoggedIn(false);
      }
    }
  }

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

          <Paragraph className="white-text">
            {" "}
            <b>@</b>
            {userLogged.username}
          </Paragraph>

          <Link to="/" className="Link">
            <Button
              variant="dark button"
              className="header-content Logout-button "
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          </Link>
        </div>
      ) : null}
    </header>
  );
};
