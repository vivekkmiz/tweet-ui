import React from "react";

import PolicyForm from "./PolicyForm";
import "./NewPolicy.css";
import MainHeader from "../../UI/MainHeader";

const NewPolicy = (props) => {
  const savePolicyDataHandler = (enteredPolicyData) => {
    const PolicyData = {
      ...enteredPolicyData,
      id: Math.random().toString(),
    };
    console.log(PolicyData);
    props.onAddPolicy(PolicyData);
  };

  return (
    <div>
      <MainHeader />
      <div className="new-policy">
        <PolicyForm onSavePolicyData={savePolicyDataHandler} />
      </div>
    </div>
  );
};

export default NewPolicy;
