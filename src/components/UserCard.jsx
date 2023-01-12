import { createContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// import { Avatar } from "@mui/material";

export const UserCard = ({setUser, user}) => {


  return (
    <li className="card">
      <img src={user.avatar_url} alt={`${user.name}`} className="reviewPic" />
      <h3>{user.name}</h3>
      {/* <Avatar sx={{ width: 24, height: 24 }}>H</Avatar> */}
      <p className="author">@{user.username}</p>
      <Link to={"/"}>
        <Button variant="dark button" className="Read-More" onClick={(()=> setUser(user) )}>
          Login
        </Button>{" "}
      </Link>
    </li>
  );
};
