import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {getArticlesByTopic} from './utils/ApiFunctions'; 

import LinearProgress from '@mui/material/LinearProgress'
import ArticleList from './ArticleList';

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
    <h2>{topic} articles</h2>
    <ArticleList articles={articles} />
    </>
)
}

export default TopicArticles