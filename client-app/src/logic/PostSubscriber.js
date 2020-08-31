const PostSubscriber = (subscriber) => {
    const axios = require('axios').default;
    const url = "http://localhost:4000/subscribe";
    const data = subscriber;

    axios.post(url, data).then((response) => {
      const res = response.data;
      console.log(res);
    }).catch(err => console.log(err));
}

export default PostSubscriber;