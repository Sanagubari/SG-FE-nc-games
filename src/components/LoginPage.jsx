import { useEffect, useState } from "react";
import { fetchUsers } from "../utils/api";
import { Alert } from "react-bootstrap";
import { AlertTitle } from "@mui/material";
import { UserCard } from "./UserCard";

export const LoginPage = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetchUsers()
      .then((allUsers) => {
        setIsLoading(false);
        setUsers(allUsers);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return (
      <Alert severity="error">
        {" "}
        <AlertTitle>
          <strong>404</strong>
        </AlertTitle>
        Something went wrong
      </Alert>
    );
  }
  return (
    <main>
      <h2 className="list-title user-title"> Select User</h2>
      <ul className="cardList">
        {users.map((user) => {
          return <UserCard key={user.username} {...user} />;
        })}
      </ul>
    </main>
  );
};
