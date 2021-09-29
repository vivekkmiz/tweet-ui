import React, { useState } from "react";
import { useHistory} from "react-router-dom";
import "./SignUp.css";

const SignUp = (props) => {
  const [_name, setEnteredName] = useState(props.data.name);
  const [_username, setEnteredUsername] = useState(props.data.username);
  const [_password, setEnteredPassword] = useState(props.data.password);
  const [_address, setEnteredAddress] = useState(props.data.address);
  const [_citizenship, setEnteredCitizenship] = useState(props.data.citizenship);
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

  var problematicInputs = "";
  const history = useHistory()

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    if(re.test(email)){
      return re.test(email)
    }
    else{
      problematicInputs = problematicInputs + "email";
    }
  };
  function validateName(name) {
    var re = /^[A-Za-z ]+$/;
    if(re.test(name)){
      return re.test(name)
    }
    else{
      problematicInputs = problematicInputs + "name";
    }
  };

  function validateAge(_date) {
    var today = new Date();
    var birthDate = new Date(_date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if(age<96 && age>18){
      return true;
    }
    else {
      problematicInputs = problematicInputs + "date of birth not allowed";
      return false;
    }
}
  const submitHandler = (event) => {
    event.preventDefault();
    if( validateEmail(_email) && validateName(_name) ){
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
    history.push("/myProfile")
  }
  else{
    console.log( problematicInputs);
  }
  };
  return (
    <div>
      <header className="title">Policy Palace</header>
      <div className="abc">
        <h1 className="custom">SignUp with Policy Palace</h1>
        <form onSubmit={submitHandler}>
          <div className="user__control">
            <input
              required
              placeholder="Name"
              type="NAME"
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
              required
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
          <div required className="user__control">
            <input
              placeholder="email : abc@dfg.com"
              type="email"
              onChange={emailChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              required
              placeholder="Contact Number"
              type="tel"
              onChange={contactChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              required
              placeholder=" Password"
              type="password"
              onChange={passwordChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              required
              placeholder=" address"
              type="address"
              onChange={addressChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              required
              placeholder="Citizenship"
              type="citizenship"
              onChange={citizenshipChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              required
              placeholder="State"
              type="TEXT"
              onChange={stateChangeHandler}
            />
          </div>
          <div className="user__control">
            <input
              required
              placeholder="Country"
              type="text"
              onChange={countryChangeHandler}
            />
          </div>
          <div className="user__control" onChange={genderChangeHandler}>
            <select required>
              <option value="" disabled selected hidden>
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="user__control" onChange={maritialStatusChangeHandler}>
            <select required>
              <option value="" disabled selected hidden>
                Marritial Status
              </option>
              <option>Married</option>
              <option>Single</option>
              <option>Divorced</option>
            </select>
          </div>
          <div className="user__control" onChange={idTypeChangeHandler}>
            <select required>
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
              required
              placeholder="Id Number"
              type="TEXT"
              onChange={idNumberChangeHandler}
            />
          </div>

          <div className="user__actions">
            <button
              className="user__actions"
              type="submit"
              onClick={submitHandler}
            >  
                Sign Up
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

export default SignUp;
