import React, { useState } from "react";
import "./UserForm.css";
import { useHistory } from "react-router-dom";
import MainHeader from "../Z-UI/MainHeader";

const UserForm = (props) => {
  const [firstName, setEnteredFname] = useState(props.data.firstName);
  const [lastName, setEnteredLname] = useState(props.data.lastName);
  const [userName, setEnteredUsername] = useState(props.data.userName);
  const [password, setEnteredPassword] = useState(props.data.password);
  const [email, setEnteredEmail] = useState(props.data.email);
 

  const history = useHistory();

  const addUserHandler = (user) => {
    //do a post user call
  };

  const fnameChangeHandler = (event) => {
    setEnteredFname(event.target.value);
  };

  const lnameChangeHandler = (event) => {
    setEnteredLname(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function validateName(name) {
    var re = /^[A-Za-z ]+$/;
    return re.test(name);
  }
  

  const submitHandler = (event) => {
    event.preventDefault();
    if ((validateEmail(email) || email.length===0) && (validateName(firstName) || firstName.length===0)&& (validateName(lastName) || lastName.length===0) ){
      const userData = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
        email: email,  
      };

      props.onUpdate(userData);
      addUserHandler(userData);
      history.push("/myProfile");
    } else {
      console.log("Name ane email validaion has failed");
    }
  };
  return (
    <div>
      <MainHeader />
      <div className="abc">
        <h1 className="custom">Update Your Details</h1>
        <form onSubmit={submitHandler}>
          <div className="user__control">
            <input
              placeholder=" First Name"
              type="text"
              onChange={fnameChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              placeholder="Last Name"
              type="text"
              onChange={lnameChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              placeholder="Username"
              type="text"
              onChange={usernameChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              placeholder="email : abc@dfg.com"
              type="email"
              onChange={emailChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              placeholder=" Password"
              type="password"
              onChange={passwordChangeHandler}
            />
          </div>
          <div className="user__actions">
            <button
              className="user__actions"
              type="submit"
              onClick={submitHandler}
            >
              Update
            </button>
            <button activeclassName="user__actions" type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
