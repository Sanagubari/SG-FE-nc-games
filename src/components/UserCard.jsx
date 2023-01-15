import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { useContext } from "react";

// import { Avatar } from "@mui/material";

export const UserCard = (user) => {
  const {  setUserLogged, setIsLoggedIn} =
    useContext(UserContext);

  return (
    <li className="card">
      <img src={user.avatar_url} alt={`${user.name}`} className="reviewPic" />
      <h3>{user.name}</h3>

      <p className="user">@{user.username}</p>

      <Link to={"/"}>
        <Button
          variant="dark button"
          className="Login-button"
          onClick={() => {
            setUserLogged(user);
            setIsLoggedIn(true);
          }}
        >
          Login
        </Button>{" "}
      </Link>
    </li>
  );
};
