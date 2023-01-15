import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  ChatBubbleOvalLeftIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const ReviewCard = (review) => {
  return (
    <li>
      <Card sx={{ width: 345 }} className="review-card">
        <CardMedia
          sx={{ height: 240 }}
          image={review.review_img_url}
          title={`${review.title} cover Image`}
          alt={`${review.title} cover Image`}
        />
        <CardContent className="padding">
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            className="list-title"
          >
            {review.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="author">
            By {review.owner}
          </Typography>
        </CardContent>
        <CardActions className="Read-More">
          <Link to={`/games/${review.review_id}`}>
            <Button variant="dark button" size="small">
              Read Review
            </Button>{" "}
          </Link>
        </CardActions>
        <div className="icons-on-card">
          <p className="icon comment-icon">
            {" "}
            <ChatBubbleOvalLeftIcon /> {review.comment_count}
          </p>

          <p className="icon vote-icon">
            {" "}
            <HandThumbUpIcon /> <span>{"  "}</span>
            {review.votes}
          </p>
        </div>
      </Card>
    </li>
  );
};

//     <li className="card">
//       <img
//         src={review.review_img_url}
//         alt={`${review.title} cover Image`}
//         className="reviewPic"
//       />
//       <h3>{review.title}</h3>

//       <p className="author">By {review.owner}</p>

// <Link to={`/games/${review.review_id}`}>
//   <Button variant="dark button" className="Read-More">
//     Read Review
//   </Button>{" "}
// </Link>

// <div className="icons-on-card">
// <ChatBubbleOvalLeftIcon />
// <p> {review.comment_count}</p>
// <HandThumbUpIcon />
// <p> {review.votes}</p>
// </div>
//     </li>
//   );
// };
