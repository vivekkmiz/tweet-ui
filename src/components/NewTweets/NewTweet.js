import React from "react";
import TweetForm from "./TweetForm";
import "./NewTweet.css";


const NewTweet = (props) => {

  const saveTweetHandler = (TweetData) => {
    console.log(JSON.stringify(TweetData));
    fetch('/vivek/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(TweetData)
    })
  };

  return (
    <div>
      <div className="new-policy">
        <TweetForm userName={props.userData.userName} onSaveTweet={saveTweetHandler} />
      </div>
    </div>
  );
};

export default NewTweet;
