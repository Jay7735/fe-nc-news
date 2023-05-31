import axios from "axios";

const getComments = (article_id) => {
  return axios
    .get(`https://jd-nc-news.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments;
    });
};

export default getComments;
