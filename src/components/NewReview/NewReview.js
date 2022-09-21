import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import "./NewReview.css";

const NewReview = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveReviewDataHandler = (enteredReviewData) => {
    const reviewData = {
      ...enteredReviewData,
      id: Math.random().toString(),
    };
    props.onAddReview(reviewData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-review">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new book review</button>
      )}
      {isEditing && (
        <ReviewForm
          onSaveReviewData={saveReviewDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewReview;
