import React, { useState } from "react";
import { Route } from "react-router";
import NewTweet from "./NewTweets/NewTweet";
import User from "./User/User";
import UserForm from "./User/UserForm";
import Tweets from "./Tweets/Tweets";
import UsersList from "./User/UsersList";
//import "./app.css"


const DUMMY_Policys = [];
const DUMMY_User = {
  fname: "Vivek" ,
  lname: "Mishra" ,
  username: "",
  password: "",
  email: "",
};

const App = () => {
  const [userData, setUpdate] = useState(DUMMY_User);
  const [TweetList, setTweetList] = useState(DUMMY_Policys);
  const [usersList, setUsersList] = useState(DUMMY_Policys);
  console.log("i WAS HERE 2");
  console.log(userData);

  console.log(userData);

  const addTweetHandler = (tweet) => {
    setTweetList((prevTweets) => {
      return [tweet, ...prevTweets];
    });
  };

  const addUserHandler = (user) => {
    setUsersList((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

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
        
        <Route exact path="/signup">
        <UserForm data={userData} onAddUser={addUserHandler} onUpdate = {updateHandler}/>
        </Route>
        <Route exact path="/myProfile">
          <User userData={userData} />
        </Route>
        <Route exact path="/users">
          <UsersList usersList={usersList} />
        </Route>
        <Route path="/tweet">
          <NewTweet onAddTweet={addTweetHandler} />
        </Route>
        <Route  path="/tweets">
          <Tweets items={TweetList} />
        </Route>
      </main>
    </div>
  );
};

export default App;
