import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const ErrorPage = () => {
  return (
    <Alert severity="error">
      {" "}
      <AlertTitle>
        <strong>404</strong>
      </AlertTitle>
      Whoopsies, looks like you've searched for a non existent page
      <Link to="/">
        <Button className="error-button">Go Back</Button>
      </Link>
    </Alert>
  );
};
