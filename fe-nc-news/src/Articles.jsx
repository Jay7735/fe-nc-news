import getArticles from "./utils/Articles";
import React from 'react'
import {useState, useEffect} from 'react'
import "./articles.css"

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
        return <p>Loading, please wait</p>
    }}
    return (
    <>

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
                    <button className="button">Click to read more!</button>
                    </div>


                </div>
            )
        })}
    </div>
    </>
)
}

export default Articles;