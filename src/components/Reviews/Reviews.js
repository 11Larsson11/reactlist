import React, { useState } from "react";
import ReviewFilter from "./ReviewFilter";
import Card from "../UI/Card";
import "./Reviews.css";
import ReviewList from "./ReviewList";

const Reviews = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredReviews = props.items.filter((review) => {
    return review.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="reviews">
        <ReviewFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ReviewList items={filteredReviews} />
      </Card>
    </div>
  );
};

export default Reviews;
