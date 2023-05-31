import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import getArticle from './utils/GetArticle'; 
import './articlePage.css'
import getComments from './utils/GetComments'

const ArticlePage = () => {
  const { article_id } = useParams(); 
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([])

  useEffect(() => {
    setIsLoading(true);
    
    getArticle(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

useEffect(()=>{
    getComments(article_id).then((commentData)=>{
        setComments(commentData)
    })
}, [article_id])


  if (isLoading) {
    return <p>Loading article, please wait...</p>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={article.title}/>
      <ul className="underPic">
      <li>Author: {article.author}</li>
      <li>Topics: {article.topic}</li>
      <li>Votes: {article.votes}</li>

      </ul>
      
      <p>{article.body}</p>
    <h3>Comments</h3>
    <div className="commentGrid">
    {comments.map((comment)=>{
        return (
            <div className="commentCard" key={comment.comment_id}>
                <p>{comment.body}</p>
                <div className="authorVotes">
                <p>Author: {comment.author}</p>
                <p>Votes: {comment.votes}</p>
                </div>
            </div>
        )
    })}

    </div>
    </div>
  );
};


export default ArticlePage;