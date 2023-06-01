import axios from 'axios'

export const getArticles = () => {
    return axios.get("https://jd-nc-news.onrender.com/api/articles")
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
  return axios.patch(`https://jd-nc-news.onrender.com/api/articles/${article_id}`, { inc_votes : upDownVote}).then((response)=>{
  console.log(response.data.updated.votes)  
  return response.data.updated
  })
}