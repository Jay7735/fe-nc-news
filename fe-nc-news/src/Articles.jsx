import {getArticles} from "./utils/ApiFunctions";
import React from 'react'
import {useState, useEffect} from 'react'
import Topics from './Topics.jsx'
import LinearProgress from '@mui/material/LinearProgress'
import ArticleList from './ArticleList'

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
    <h2>articles</h2>
    <ArticleList articles={articles} />
    </>
)
}

export default Articles;