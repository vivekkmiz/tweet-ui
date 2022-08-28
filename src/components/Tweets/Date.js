import React from "react";

import "./Date.css";

const Date = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="policy-date">
      <div className="policy__month">{month}</div>
      <div className="policy-date__year">{year}</div>
      <div className="policy-date__day">{day}</div>
    </div>
  );
};

export default Date;
