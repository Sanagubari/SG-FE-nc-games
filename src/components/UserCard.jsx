import Button from "react-bootstrap/Button";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserCard = (user) => {
  const { setUserLogged, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <li className="card">
      <img src={user.avatar_url} alt={`${user.name}`} className="reviewPic" />
      <h3>{user.name}</h3>
      <p className="user">@{user.username}</p>
      <Button
        variant="dark button"
        className="Login-button"
        onClick={() => {
          setUserLogged(user);
          setIsLoggedIn(true);
          navigate(-1);
        }}
      >
        Login
      </Button>{" "}
    </li>
  );
};
