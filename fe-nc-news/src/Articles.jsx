import {getArticles} from "./utils/ApiFunctions";
import React from 'react'
import {useState, useEffect} from 'react'
import "./styles/articles.css"
import { Link } from 'react-router-dom';
import Topics from './Topics.jsx'
import Button from '@mui/material/Button'
import ReadMore from '@mui/icons-material/ReadMore'
import LinearProgress from '@mui/material/LinearProgress'

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        getArticles().then((articles)=> {
            setArticles(articles)
        }).then(()=>setIsLoading(false))
    }, [])
    
    {if (isLoading===true){
        return (<>
        <p>Loading, please wait</p>
        <LinearProgress />
        </>)
    }}
    return (
    <>
   <Topics />
    <h2>Articles:</h2>
    <div className="articleGrid">
        {articles.map((article)=>{
            return(
                <div className="articleCard" key={article.article_id}>
                    <img src={article.article_img_url} alt={article.title} className="imageStyle"/>
                    <div className="articleCardContent">
                    <h3>{article.title}</h3>
                    <p>Author: {article.author}</p>
                    <p>Comment Count: {article.comment_count}</p>
                    <div className="navigateAway">
                        <Button component={Link} to={`/articles/${article.article_id}`} variant="contained" endIcon={<ReadMore/>} color="secondary">Read more</Button>
                    {/* <Link to={`/articles/${article.article_id}`}>Click to read more!</Link> */}
                    </div> 
                    </div>
                </div>
            )
        })}
    </div>
    </>
)
}

export default Articles;