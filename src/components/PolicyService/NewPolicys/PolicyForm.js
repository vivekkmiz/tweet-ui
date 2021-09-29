import React, { useState } from "react";
import "./PolicyForm.css";

const PolicyForm = (props) => {
  const [enteredPolicyDuration, setEnteredPolicyDuration] = useState("");
  const [enteredPolicyType, setEnteredPolicyType] = useState("");
  const [enteredPolicyDate, setEnteredPolicyDate] = useState("");
  const [enteredPolicyAmount, setEnteredPolicyAmount] = useState("");

  const policyDurationChangeHandler = (event) => {
    setEnteredPolicyDuration(event.target.value);
  };
  const policyDateChangeHandler = (event) => {
    setEnteredPolicyDate(event.target.value);
  };

  const policyTypeChangeChangeHandler = (event) => {
    setEnteredPolicyType(event.target.value);
  };

  const policyAmountChangeHandler = (event) => {
    setEnteredPolicyAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const policy = {
      duration: enteredPolicyDuration,
      type: enteredPolicyType,
      date: new Date(enteredPolicyDate),
      amount: enteredPolicyAmount,
    };

    console.log(policy);
    props.onSavePolicyData(policy);
  };

  return (
    <div>
      <div className="custom">BUY A POLICY </div>
      <form onSubmit={submitHandler}>
        <div className="new-policy__controls">
          <div className="new-policy__control" onChange={policyTypeChangeChangeHandler}>
            <label>Policy Type</label>
            <select required>
            <option value="" disabled selected hidden>
              Select Policy Type
            </option>
            <option>Life Insurance</option>
            <option>Gneral Insurance</option>
            <option>Health Insurance</option>
            <option>Tax Saver</option>
          </select>
            
          </div>
          <div className="new-policy__control">
            <label>Policy Date</label>
            <input
              required
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={policyDateChangeHandler}
            />
          </div>
          <div className="new-policy__control">
            <label>Amount</label>
            <input
              required
              type="number"
              min="0"
              onChange={policyAmountChangeHandler}
            />
          </div>
          <div className="new-policy__control" onChange={policyDurationChangeHandler}>
            <label>Policy Duration</label>
           <select required>
            <option value="" disabled selected hidden>
              Select Duration
            </option>
            <option>5 Years</option>
            <option>10 Years</option>
            <option>15 Years</option>
            <option>20 years</option>
          </select>
          </div>
        </div>
        <button className="custom" type="submit">
          BuY
        </button>
      </form>
    </div>
  );
};

export default PolicyForm;
