import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://jd-nc-news.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    })
    .catch((err) => console.log(err));
};

export const getArticle = (article_id) => {
  return axios
    .get(`https://jd-nc-news.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((err) => console.log(err));
};

export const getComments = (article_id) => {
  return axios
    .get(`https://jd-nc-news.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    });
};

export const patchVotes = (article_id, upDownVote) => {
  return axios
    .patch(`https://jd-nc-news.onrender.com/api/articles/${article_id}`, {
      inc_votes: upDownVote,
    })
    .then((response) => {
      return response.data.updated;
    })
    .catch((error) => {
      if (error.message === "Network Error") {
        alert(
          "You are currently offline and are unable to vote at the moment. Please try again soon."
        );
      }
    });
};

export const postComment = (formData, article_id) => {
  return axios
    .post(
      `https://jd-nc-news.onrender.com/api/articles/${article_id}/comments`,
      formData
    )
    .then((response) => {
      return response.data.comments[0];
    })
    .catch((err) => console.log(err));
};

export const getTopics = () => {
  return axios
    .get(`https://jd-nc-news.onrender.com/api/topics`)
    .then((response) => {
      console.log(response, 'getTopics request response')
      return response
    }).catch((err) => console.log(err));
};

export const getArticlesByTopic = (topic) => {
  return axios
    .get(`https://jd-nc-news.onrender.com/api/articles?topic=${topic}`)
    .then((response) => {
      console.log(response.body.topics, 'articleByTopic request response')
      return response.body.topics
    }).catch((err) => console.log(err));
};
