import { useState } from "react";
import { NavBar } from "./NavBar";
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";
import { ReviewList } from "./ReviewList";

export const ReviewPage = ({ setCategoryChosen }) => {
  const [isError, setIsError] = useState(false);

  return (
    <main>
      <div>
        {" "}
        {isError ? (
          <Alert
            severity="error"
            onClose={() => {
              setIsError(false);
            }}
          >
            <AlertTitle>
              <strong>404</strong>
            </AlertTitle>
            Something went wrong
          </Alert>
        ) : null}
      </div>
      <NavBar setCategoryChosen={setCategoryChosen} />
      <ReviewList setIsError={setIsError} />
    </main>
  );
};
