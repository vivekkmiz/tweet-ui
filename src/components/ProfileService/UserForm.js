import React, { useState } from "react";
import "./UserForm.css";
import { useHistory } from "react-router-dom";
import MainHeader from "../UI/MainHeader";

const UserForm = (props) => {
  const [_name, setEnteredName] = useState(props.data.name);
  const [_username, setEnteredUsername] = useState(props.data.username);
  const [_password, setEnteredPassword] = useState(props.data.password);
  const [_address, setEnteredAddress] = useState(props.data.address);
  const [_citizenship, setEnteredCitizenship] = useState(
    props.data.citizenship
  );
  const [_state, setEnteredState] = useState(props.data.state);
  const [_country, setEnteredCountry] = useState(props.data.country);
  const [_email, setEnteredEmail] = useState(props.data.email);
  const [_gender, setEnteredGender] = useState(props.data.gender);
  const [_maritialStatus, setEnteredMaritialStatus] = useState(
    props.data.maritialStatus
  );
  const [_contact, setEnteredContact] = useState(props.data.contact);
  const [_date, setEnteredDate] = useState(props.data.date);
  const [_idType, setEnteredIdType] = useState(props.data.idType);
  const [_idNumber, setEnteredIdNumber] = useState(props.data.idNumber);

  const history = useHistory();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const contactChangeHandler = (event) => {
    setEnteredContact(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const citizenshipChangeHandler = (event) => {
    setEnteredCitizenship(event.target.value);
  };

  const stateChangeHandler = (event) => {
    setEnteredState(event.target.value);
  };

  const countryChangeHandler = (event) => {
    setEnteredCountry(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const genderChangeHandler = (event) => {
    setEnteredGender(event.target.value);
  };

  const maritialStatusChangeHandler = (event) => {
    setEnteredMaritialStatus(event.target.value);
  };

  const idTypeChangeHandler = (event) => {
    setEnteredIdType(event.target.value);
  };

  const idNumberChangeHandler = (event) => {
    setEnteredIdNumber(event.target.value);
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
    console.log(_date)
    if ((validateEmail(_email) || _email.length===0) && (validateName(_name) || _name.length===0) ){
      const userData = {
        name: _name,
        username: _username,
        password: _password,
        address: _address,
        citizenship: _citizenship,
        state: _state,
        country: _country,
        email: _email,
        gender: _gender,
        maritialStatus: _maritialStatus,
        contact: _contact,
        date: new Date(_date),
        idType: _idType,
        idNumber: _idNumber,
      };

      props.onUpdate(userData);
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
              placeholder="Name"
              type="text"
              onChange={nameChangeHandler}
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
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
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
              placeholder="Contact Number"
              type="tel"
              onChange={contactChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              placeholder=" Password"
              type="password"
              onChange={passwordChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              placeholder=" address"
              type="address"
              onChange={addressChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              placeholder="Citizenship"
              type="text"
              onChange={citizenshipChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              placeholder="State"
              type="TEXT"
              onChange={stateChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              placeholder="Country"
              type="text"
              onChange={countryChangeHandler}
            />
          </div>
          <div className="user__control" onChange={genderChangeHandler}>
            <select>
              <option value="" disabled selected hidden>
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="user__control" onChange={maritialStatusChangeHandler}>
            <select>
              <option value="" disabled selected hidden>
                Marritial Status
              </option>
              <option>Married</option>
              <option>Single</option>
              <option>Divorced</option>
            </select>
          </div>
          <div className="user__control" onChange={idTypeChangeHandler}>
            <select>
              <option value="" disabled selected hidden>
                ID Type
              </option>
              <option>Aadhar Card</option>
              <option>PAN Card</option>
              <option>Voter Card</option>
            </select>
          </div>
          <div className="user__control">
            <input
              placeholder="Id Number"
              type="number"
              onChange={idNumberChangeHandler}
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
