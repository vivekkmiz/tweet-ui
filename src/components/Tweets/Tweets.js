import React, { useEffect, useState } from "react";
import TweetItem from "./TweetItem";
import Card from "../Z-UI/Card";
import "./Tweets.css";


const Tweets = (props) => {

  const [tweetList, setTweetList] = useState([]);
  
  useEffect(async () => {
    const response = await fetch('/all');
    const body = await response.json();
    console.log(body);
    setTweetList(body);
  },[]);

  return (
    <div>
      <Card className="policys">
        {tweetList.map((tweetData) => (
          <TweetItem
            username={tweetData.username}
            tweet={tweetData.content}
            likes={tweetData.likes}
          />
        ))}
      </Card>
    </div>
  );
};

export default Tweets;
