import React, { useState } from "react";
import ListItem from "./ListItem";
import ReviewFilter from "./ReviewFilter";
import Card from "../UI/Card";
import "./Reviews.css";

const Reviews = (props) => {
const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="reviews">
        <ReviewFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ListItem
          date={props.items[0].date}
          bookName={props.items[0].bookName}
          author={props.items[0].author}
          description={props.items[0].description}
          review={props.items[0].review}
        />
      </Card>
    </div>
  );
};

export default Reviews;
