import React, { useState } from "react";
import "./TweetForm.css";

const TweetForm = (props) => {
  const [enteredTweet, setTweet] = useState("");

  const tweetChangeHandler = (event) => {
    setTweet(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const TweetData = {
      id: Math.floor(Math.random() * 10000000),
      tweet: {
        content: enteredTweet,
        likes: {},
        replies: {},
        username: "vivek",
        tweetId: "stringger"
      }

    };

    console.log(enteredTweet);
    props.onSaveTweet(TweetData);
  };

  return (
    <div>
      <div className="custom">Tweet</div>
      <form onSubmit={submitHandler}>
        <div className="new-policy__controls">
          <div className="new-policy__control">
            <label>Tweet</label>
            <input
              required
              type="text"
              min="0"
              onChange={tweetChangeHandler}
            />
          </div>
        </div>
        <button className="custom" onClick={submitHandler}>
          Tweet
        </button>
      </form>
    </div>
  );
};

export default TweetForm;
