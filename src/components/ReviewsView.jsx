import { Card, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import * as api from "../api";

const ReviewsView = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchReviews().then(({ data }) => {
      console.log(data[0]);
      setAllReviews(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Spinner animation="border" />;

  return (
    <div className="reviews">
      {allReviews.map((review) => {
        console.log(review);
        return (
          <Card className="card">
            <div className="card-horizontal">
              <Card.Img src={`${review.review_img_url}`} className="card-img" />
              <Card.Body>
                <Card.Title className="card-title">{review.title}</Card.Title>
                <Card.Text>{`Posted by ${review.owner}`}</Card.Text>
                <Card.Text className="card-body">
                  {review.review_body}
                </Card.Text>
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
      })}
    </div>
  );
};

export default ReviewsView;
