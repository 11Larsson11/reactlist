import ReviewForm from "./ReviewForm";
import "./NewReview.css";

const NewReview = (props) => {
  const saveReviewDataHandler = (enteredReviewData) => {
    const reviewData = {
      ...enteredReviewData,
      id: Math.random().toString(),
    };
    props.onAddReview(reviewData);
  };

  return (
    <div className="new-review">
      <ReviewForm onSaveReviewData={saveReviewDataHandler} />
    </div>
  );
};

export default NewReview;
