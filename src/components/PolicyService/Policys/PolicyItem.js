import React from "react";

import PolicyDate from "./PolicyDate";
import Card from "../../UI/Card";
import "./PolicyItem.css";

const PolicyItem = (props) => {
  console.log(props);
  return (
    <Card className="policy-item">
      <PolicyDate date={props.date} />
      <div className="policy-item__price">Type: {props.type}</div>
      <div className="policy-item__description">
        <h2>Duration: {props.duration} Years</h2>
        <div className="policy-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default PolicyItem;
