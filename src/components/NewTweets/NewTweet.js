import React from "react";
import TweetForm from "./TweetForm";
import "./NewTweet.css";
import MainHeader from "../Z-UI/MainHeader";

const NewTweet = (props) => {

  const saveTweetHandler = async (TweetData) => {
    console.log(TweetData);
    props.onAddTweet(TweetData);
    await fetch('/clients' + (TweetData.id ? '/' + TweetData.id : ''), {
      method: (TweetData.id) ? 'PUT' : 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(TweetData),
  });
  };

  return (
    <div>
      <MainHeader />
      <div className="new-policy">
        <TweetForm username={props.username} onSaveTweet={saveTweetHandler} />
      </div>
    </div>
  );
};

export default NewTweet;
