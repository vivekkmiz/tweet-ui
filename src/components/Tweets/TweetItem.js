import React from "react";

import Card from "../Z-UI/Card";
import "./TweetItem.css";

const TweetItem = (props) => {
  console.log(props);
  return (
    <Card className="policy-item">
      <div className="policy-item__description">{props.tweet}</div>
      <div className="policy-item__price">{props.username}</div>
      <div className="policy-item__h2">{props.likes}</div>
    </Card>
  );
};

export default TweetItem;
