export const Review = ({ review }) => {
  const capitlised =
            review.category.toUpperCase()
          const categoryName = capitlised.replace(/-/g, " ");

          let date = review.created_at
          .slice(0, 10)
          .replace(/-/g, " ")
          .split(" ");
      

        let realDate = `${date[2]}/${date[1]}/${date[0]}`;
  return (
    
    <section>
      <div className="review-info">
      <p className="genre">{categoryName}</p>
      <h2 className="review-title">{review.title}</h2>
      <p className="sub-info">By <b className="emphasise">{review.owner}</b></p>
      <p className="sub-info">Posted on: {realDate}</p>
      </div>
      <img src={review.review_img_url} alt={`${review.title} game`}></img>
      <p className="body">{review.review_body}</p>
    </section>
  );
};
