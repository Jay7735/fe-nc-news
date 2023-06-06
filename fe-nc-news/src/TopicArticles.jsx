import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {getArticlesByTopic} from './utils/ApiFunctions'; 
import { Link } from 'react-router-dom';
import './styles/articlePage.css'
import LinearProgress from '@mui/material/LinearProgress'

const TopicArticles = () => {

    const { topic } = useParams(); 
const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    setIsLoading(true);
    getArticlesByTopic(topic).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (<><p>Loading your articles by topic, please wait...</p>
    <LinearProgress/></>);
  }
return (
    <>
    <h2>{topic} Articles</h2>
    {articles.map((article)=>{
        return (
            <div className="articleCard" key={article.article_id}>
                    <img src={article.article_img_url} alt={article.title} className="imageStyle"/>
                    <div className="articleCardContent">
                    <h3>{article.title}</h3>
                    <p>Author: {article.author}</p>
                    <p>Comment Count: {article.comment_count}</p>
                    <div className="navigateAway">
                    <Link to={`/articles/${article.article_id}`}>Click to read more!</Link>
                    </div> 
                    </div>
                </div>
            )
    })}
    </>
)
}

export default TopicArticles