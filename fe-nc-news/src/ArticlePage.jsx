import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {getArticle} from './utils/ApiFunctions'; 
import './styles/articlePage.css'
import Comments from './Comments.jsx'
import Votes from './Votes.jsx'
import LinearProgress from '@mui/material/LinearProgress'


const ArticlePage = () => {
  const { article_id } = useParams(); 
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    getArticle(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return (<><p>Loading article, please wait...</p>
    <LinearProgress/></>);
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={article.title}/>
      <ul className="underPic">
      <li>Author: {article.author}</li>
      <li>Topics: {article.topic}</li>
      
      <Votes article_id={article_id} votes={article.votes} />
      </ul>
      <p>{article.body}</p>
    <Comments article_id={article_id} />
    </div>
  );
};

export default ArticlePage;