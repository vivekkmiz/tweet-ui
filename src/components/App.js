import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import NewTweet from "./NewTweets/NewTweet";
import User from "./User/User";
import UserForm from "./User/UserForm";
import Tweets from "./Tweets/Tweets";
import UsersList from "./User/UsersList";
import Login from "./SignIn/Login";
import MainHeader from "./Z-UI/MainHeader";
//import "./app.css"

const dummy_user = {
  firstName: "",
  lastName: "",
  userName: "",
  password: "",
  email: "",  
}

const App = () => {
  const [userData, setUpdate] = useState(dummy_user);
  console.log(userData);

  const updateHandler = (updateData) => {
    const userData = {
      ...updateData,
    };
    console.log(userData);
    console.log("update success full");
    setUpdate(userData);
  };

  return (
    <div className = "app">
      <main>
        <MainHeader/>
        <Route exact path="/">
        <Login data={userData} onUpdateUser = {updateHandler}/>
        </Route>
        <Route exact path="/signup">
        <UserForm data={userData} onUpdate = {updateHandler}/>
        </Route>
        <Route exact path="/myProfile">
          <User userData={userData} />
        </Route>
        <Route exact path="/users">
          <UsersList userData={userData}  />
        </Route>
        <Route path="/tweet">
          <NewTweet userData={userData} />
        </Route>
        <Route  path="/tweets">
          <Tweets userData={userData}/>
        </Route>
      </main>
    </div>
  );
};

export default App;
