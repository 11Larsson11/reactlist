import React from "react";
import ListItem from "./ListItem";
import Card from "../UI/Card";
import "./Reviews.css"

//expenses

const Reviews = (props) => {
  return (
    <Card className="reviews">
      <ListItem
        date={props.items[0].date}
        bookName={props.items[0].bookName}
        author={props.items[0].author}
        description={props.items[0].description}
        review={props.items[0].review}
      />
    </Card>
  );
};

export default Reviews;
