import React from "react";
import TweetForm from "./TweetForm";
import "./NewTweet.css";
import MainHeader from "../Z-UI/MainHeader";

const NewTweet = (props) => {
  const saveTweetHandler = (tweetData) => {
    const TweetData = {
      ...tweetData,
      id: Math.random().toString(),
    };
    console.log(TweetData);
    props.onAddTweet(TweetData);
  };

  return (
    <div>
      <MainHeader />
      <div className="new-policy">
        <TweetForm onSaveTweet={saveTweetHandler} />
      </div>
    </div>
  );
};

export default NewTweet;
