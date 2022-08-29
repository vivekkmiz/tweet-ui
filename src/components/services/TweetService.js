import axios from 'axios';

const BASE_URI = 'http://localhost:8080/api/v1.0/tweets';

class TweetService{
    getAllTweets(t){
        const list = [];
        axios.get(BASE_URI+'/all',
        {headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => {
          list = res.data;
        })
        return list;
    }
}
export default new TweetService();