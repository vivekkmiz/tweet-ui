import React, { useState } from "react";
import PolicyItem from "./PolicyItem";
import Card from "../../UI/Card";
import PolicysFilter from "./PolicyFilter";
import "./Policys.css";
import MainHeader from "../../UI/MainHeader";

const Policys = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <MainHeader />
      <Card className="policys">
        <PolicysFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((policy) => (
          <PolicyItem
            type={policy.type}
            duration={policy.duration}
            amount={policy.amount}
            date={policy.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Policys;
