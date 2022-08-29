import React from 'react';
import { useEffect, useState } from "react";
import './signin.css';
import { useHistory } from "react-router-dom";

function Login(props) {

  const [usersList, setUsersList] = useState([]);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState([]);

  useEffect(async () => {
    const response = await fetch('/users/all');
    const body = await response.json();
    console.log(body);
    setUsersList(body);
  },[]);

  const userIdChangeHandler = (event) => {
    setUserId(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const history = useHistory();
  const submitHandler = () => {
    if(userIsAuthenticated(userId, password)){
      props.onUpdateUser(user);
      history.push("/myProfile")
    }
  };

  const userIsAuthenticated = (userId, password) => {
    for (var index = 0; index < usersList.length; index++) {
      var _user = usersList[index];
      console.log(_user.userName);
      console.log(_user.email);
      console.log(_user.password);
      console.log("userId : "+userId);
      console.log("password: "+password);

      if(userId.length > 1 && (_user.userName == userId || _user.email == userId) && _user.password == password){
        setUser(_user)
        console.log(_user);
        return true;
      }
      else{
        console.log("failed to authenticate");
        return false};  
  }
  }

  return (

    <div class="A">
      <form className="B" >

        <div classname="form-group ">
          <label class="textBold">User Id</label>
          <input type="email" class="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={userIdChangeHandler} />

        </div>
        <div class="form-group mt-3 ">
          <label for="exampleInputPassword1" class="textBold">Password</label>
          <input type="password" class="form-control mt-3 " id="exampleInputPassword1" placeholder="Password" onChange={passwordChangeHandler} />
        </div>

        <a onClick={submitHandler}>Login</a>

      </form>
    </div>


  )
}
export default Login;