import axios from 'axios'

const Articles = () => {
  return axios.get("https://jd-nc-news.onrender.com/api/articles")
    .then((response) => {
      
      return response.data.articles;
    })
    .catch((err) => console.log(err));
};

export default Articles;