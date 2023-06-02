import { getTopics, getArticlesByTopic } from "./utils/ApiFunctions";
import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Topics = () => {
    const [topics, setTopics] = useState([])
    
    

    useEffect(()=>{
        getTopics().then((response)=>{
            setTopics(response)
        })
    }, [])

return (
    <>
    {topics.map((topic)=>{
        return (
            <Link to={`/${topic.slug}/articles`} key={topic.slug}>
            <button>{topic.slug}</button>
            </Link>
        )
    })}

    </>
)


}

export default Topics;

