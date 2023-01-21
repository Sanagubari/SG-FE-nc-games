import { useState } from "react";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import { postReview } from "../utils/api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert } from "@mui/material";
import { ReviewsContext } from "../contexts/Reviews";
import Dropdown from "react-bootstrap/Dropdown";
import { CategoriesContext } from "../contexts/Categories";
import { Link } from "react-router-dom";

export const WriteReview = () => {
  const { categories, catIsLoading } = useContext(CategoriesContext);
  const [newReview, setNewReview] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [designer, setDesigner] = useState("");
  const [category, setCategory] = useState("");
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isPosted, setIsPosted] = useState(true);
  const { userLogged, isLoggedIn } = useContext(UserContext);
  const { setReviews } = useContext(ReviewsContext);
  const [categoryChosen, setCategoryChosen] = useState();

  const handleSubmit = (event) => {
    setNewReview({});
    setIsPosted(false);
    event.preventDefault();
    postReview(userLogged.username, title, body, designer, category)
      .then((review) => {
        setNewReview(review);
        setSuccess(true);
        setIsError(false);
        setIsPosted(true);
        setCategory("");
        setCategoryChosen();
        setDesigner("");
        setTitle("");
        setBody("");
        setReviews((currReviews) => currReviews.push(newReview));
      })
      .catch((err) => {
        setIsError(true);
        setSuccess(false);
        setIsPosted(true);
      });
  };
  if (!isLoggedIn) {
    return (
      <Alert className="alert" severity="error">
        {" "}
        Whoops, you can't access this page if your not logged in.{" "}
        <Link to={`/`}>Go to homepage</Link>
      </Alert>
    );
  }
  return (
    <main>
      <h2 className="list-title write-review-title">Whats your Review?</h2>
      <Form className="box write-review-box" onSubmit={handleSubmit} noValidate>
        <p className="question write-review-question">Review title</p>
        <Form.Group
          className="mb-3"
          controlId="exampleComment.ControlTextarea1"
        >
          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Write review title here"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </Form.Group>

        <p className="question write-review-question">Review</p>
        <Form.Group
          className="mb-3"
          controlId="exampleComment.ControlTextarea1"
        >
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Write your review"
            onChange={(event) => setBody(event.target.value)}
            value={body}
          />
        </Form.Group>

        <p className="question write-review-question">Game Designer</p>
        <Form.Group
          className="mb-3"
          controlId="exampleComment.ControlTextarea1"
        >
          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Write game designer name"
            onChange={(event) => setDesigner(event.target.value)}
            value={designer}
          />
        </Form.Group>

        <p className="question write-review-question">Category</p>
        <Dropdown className="category-dropdown-post">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {categoryChosen
              ? categoryChosen.charAt(0).toUpperCase() +
                categoryChosen.slice(1).replace(/-/g, " ")
              : "Select Category"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>{catIsLoading ? "Loading..." : null}</Dropdown.Item>
            {categories.map((category) => {
              const capitlised =
                category.slug.charAt(0).toUpperCase() + category.slug.slice(1);
              const categoryName = capitlised.replace(/-/g, " ");
              return (
                <Dropdown.Item
                  key={category.slug}
                  onClick={() => {
                    setCategoryChosen(category.slug);
                    setCategory(category.slug);
                  }}
                >
                  {categoryName}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>

        {isPosted &&
        title !== "" &&
        body !== "" &&
        designer !== "" &&
        category !== "" ? (
          <Button variant="dark" type="submit" className="button">
            {" "}
            Post{" "}
          </Button>
        ) : (
          <Button variant="dark" type="submit" className="button" disabled>
            {" "}
            Post{" "}
          </Button>
        )}

        {success ? (
          <Alert
            onClose={() => {
              setSuccess(false);
            }}
            className="alert"
            severity="success"
          >
            {" "}
            Comment posted{" "}
            <Link to={`/games/${newReview.review_id}`}>View Review</Link>
          </Alert>
        ) : null}

        {isError ? (
          <Alert
            onClose={() => {
              setIsError(false);
            }}
            className="alert"
            severity="error"
          >
            {" "}
            Error, something went wrong{" "}
          </Alert>
        ) : null}
      </Form>
    </main>
  );
};
