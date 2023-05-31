import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import getArticle from './utils/GetArticle'; 
import './articlePage.css'

const ArticlePage = () => {
  const { article_id } = useParams(); 
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    getArticle(article_id).then((articleData) => {
      setArticle(articleData);
      console.log(article)
      setIsLoading(false);
    });
  }, [article_id]);

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
    </div>
  );
};


export default ArticlePage;