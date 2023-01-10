import { Button } from "react-bootstrap";

export const Votes = ({ votes }) => {
  return (
    <div className="">
      <p className="votes-title">Total votes: <b className="emphasise">{votes}</b></p>
      <Button className="vote-button" variant="light">
        Down Vote
      </Button>{" "}
      <Button className="vote-button" variant="dark">
        Up Vote
      </Button>
    </div>
  );
};
