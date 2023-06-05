import { getTopics } from "./utils/ApiFunctions";
import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Article from '@mui/icons-material/Article'

const Topics = () => {
    const [topics, setTopics] = useState([])
    
    

    useEffect(()=>{
        getTopics().then((response)=>{
            setTopics(response)
        })
    }, [])

return (
    <ButtonGroup variant="outlined\q">
    {topics.map((topic)=>{
        return (
            <Link to={`/${topic.slug}/articles`} key={topic.slug}>
            <Button endIcon={<Article/>}>{topic.slug}</Button>
            </Link>
        )
    })}
    </ButtonGroup>

)


}

export default Topics;
