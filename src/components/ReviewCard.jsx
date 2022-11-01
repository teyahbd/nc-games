import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <Card className="card">
      <div className="card-horizontal">
        <Card.Img src={`${review.review_img_url}`} className="card-img" />
        <Card.Body>
          <Link to={`/category/${review.review_id}`}>
            <Card.Title className="card-title">{review.title}</Card.Title>
          </Link>
          <Card.Text>{`Posted by ${review.owner}`}</Card.Text>
          <Card.Text className="card-body">{review.review_body}</Card.Text>
        </Card.Body>
      </div>
      <div className="card-footer">
        <Card.Text className="footer-comment">
          Comments: {`${review.comment_count}`}
        </Card.Text>
        <Card.Text className="footer-votes">
          Votes: {`${review.votes}`}
        </Card.Text>
      </div>
    </Card>
  );
};

export default ReviewCard;
