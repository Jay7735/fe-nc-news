import { getTopics, getArticlesByTopic } from "./utils/ApiFunctions";
import {React, useState, useEffect} from 'react'

const Topics = () => {
    const [topicList, setTopicList] = useState([])
    const [topic, setTopic] = useState("")
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        getTopics().then((response)=>{
            setTopicList(articles)
        })
    }, [])

useEffect(()=>{
    getArticlesByTopic(topic).then(({articles})=>{
        setArticles(articles)

    })
}, [topic])

return (
    <>
    
    </>
)


}

export default Topics;