import Button from 'react-bootstrap/Button';

export const ReviewCard = (review) => {
  return (
    <li className="card">
      <img
        src={review.review_img_url}
        alt={`${review.title} cover Image`}
        className="reviewPic"
      />
       <h3>{review.title}</h3>
      <p className='author'>{review.owner}</p>
      <Button variant='dark button' className='Read-More'>Read More</Button>{' '}
    </li>
  );
};
