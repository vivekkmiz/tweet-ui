
import TweetItem from "./TweetItem";
import Card from "../Z-UI/Card";
import "./Tweets.css";
import MainHeader from "../Z-UI/MainHeader";

const Tweets = (props) => {

  return (
    <div>
      <MainHeader />
      <Card className="policys">
        {props.items.map((tweetData) => (
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
