import React from "react";
import Card from "../UI/Card";
import "./ListItem.css";

const ListItem = (props) => {
  const year = props.date.getFullYear();

  return (
    <Card className="list-item">
      <div className="list-item__year">
        <div>{year}</div>
      </div>

      <div className="list-item__description">
        <h2>{props.bookName}</h2>
        <h2>{props.author}</h2>
        <div className="list-item__description"></div>
        <h4>{props.description}</h4>
        <div className="list-item__review">
          <div>{props.review}/10</div>
        </div>
      </div>
    </Card>
  );
};

export default ListItem;
