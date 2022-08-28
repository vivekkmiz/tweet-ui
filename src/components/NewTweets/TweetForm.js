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
      username: props.username,
      content: enteredTweet
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
        <button className="custom" type="submit">
          Tweet
        </button>
      </form>
    </div>
  );
};

export default TweetForm;
