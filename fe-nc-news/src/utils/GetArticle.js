import axios from 'axios'

const getArticle = (article_id) => {
  return axios.get(`https://jd-nc-news.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((err) => console.log(err));
};

export default getArticle;