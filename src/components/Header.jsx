import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = ({user, setUser}) => {

  const isLoggedIn = user !== null
  console.log(isLoggedIn, "<<<<<isLoggedin");

  return (
    <header className="header">
      <Link to="/" className="Link">
        <h1 className="header-content">NC GAMES</h1>
      </Link>
      <Link to='/login' className="Link" >
      <Button className="header-content Login-Button" variant="light">
        Login
      </Button>{" "}
      </Link>
      {/* {isLoggedIn ? <p>{user.username}</p> : null } */}
    </header>
  );
};
