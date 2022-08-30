import React, { useState } from "react";
import "./UserForm.css";
import { useHistory } from "react-router-dom";
import MainHeader from "../Z-UI/MainHeader";

const UserForm = (props) => {
  const [_firstName, setEnteredFname] = useState("");
  const [_lastName, setEnteredLname] = useState("");
  const [_userName, setEnteredUsername] = useState("");
  const [_password, setEnteredPassword] = useState("");
  const [_email, setEnteredEmail] = useState("");
  const [_gender, setEnteredGender] = useState("");


  const history = useHistory();

  const addUserHandler = (user) => {
    console.log(JSON.stringify(user));
    fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
  };

  const fnameChangeHandler = (event) => {
    setEnteredFname(event.target.value);
    console.log("i was in fname change handler")
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

  const genderChangeHandler = (event) => {
    setEnteredGender(event.target.value);
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
    if ((validateEmail(_email) || _email.length === 0) && (validateName(_firstName) || _firstName.length === 0) && (validateName(_lastName) || _lastName.length === 0)) {
      const userData = {
        firstName: _firstName,
        lastName: _lastName,
        userName: _userName,
        password: _password,
        email: _email,
        gender: "male",
        dob:"1995-07-07"
      };
      console.log("userdata" + userData);
      props.onUpdate(userData);
      addUserHandler(userData);
      history.push("/myProfile");
    } else {
      console.log("Name ane email validaion has failed");
    }
  };
  return (
    <div className='A'>
      <form className="B">
        <h4>Register YourSelf!</h4>

        <div className="row">
          <div className="col">
            <input type="text" className="form-control mt-2" placeholder="First name" onChange={fnameChangeHandler} />
          </div>
          <div className="col">
            <input type="text" className="form-control mt-2" placeholder="Last name" onChange={lnameChangeHandler} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input type="email" className="form-control mt-2" placeholder="Email" onChange={emailChangeHandler} />
          </div>
          <div className="col">
            <input type="password" className="form-control mt-2 " placeholder="Pasword" onChange={passwordChangeHandler}/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input type="text" className="form-control mt-2" minlength= "5" placeholder="Username" onChange={usernameChangeHandler}/>
          </div>
          <div className="col">
            <input type="text" className="form-control mt-2" placeholder="Gender" onChange={genderChangeHandler}/>
          </div>
        </div>

        <a onClick={submitHandler}>
          Submit 
        </a>
      </form>
    </div>
  );
};

export default UserForm;
