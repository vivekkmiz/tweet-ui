import React from "react";

import Date from "./Date";
import Card from "../Z-UI/Card";
import "./TweetItem.css";

const TweetItem = (props) => {
  console.log(props);
  return (
    <Card className="policy-item">
      <Date date={props.date} />
      <div className="policy-item__price">${props.tweet}</div>
    </Card>
  );
};

export default TweetItem;
