import React, { useEffect, useState } from "react";
import { Route } from "react-router";
import NewTweet from "./NewTweets/NewTweet";
import User from "./User/User";
import UserForm from "./User/UserForm";
import Tweets from "./Tweets/Tweets";
import UsersList from "./User/UsersList";
//import "./app.css"

const dummy_user = {
  firstName: "Vick",
  lastName: "Miz",
  userName: "root",
  password: "root",
  email: "root@root.com",  
}

const App = () => {
  const [userData, setUpdate] = useState(dummy_user);
  const [TweetList, setTweetList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  
  useEffect(async () => {
    const response = await fetch('/users/all');
    const body = await response.json();
    setUsersList(body);
  });

  useEffect(async () => {
    const response = await fetch('/all');
    const body = await response.json();
    console.log(body);
    setTweetList(body);
  });

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
          <NewTweet username={userData.username} onAddTweet={addTweetHandler} />
        </Route>
        <Route  path="/tweets">
          <Tweets items={TweetList} />
        </Route>
      </main>
    </div>
  );
};

export default App;
