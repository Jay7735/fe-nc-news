import { getTopics } from "./utils/ApiFunctions";
import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from "@mui/material";
import { Article } from "@mui/icons-material";

const Topics = () => {
    const [topics, setTopics] = useState([])
    
    useEffect(()=>{
        getTopics().then((response)=>{
            setTopics(response)
        })
    }, [])

return (
    <ButtonGroup variant="contained" sx={{margin: 3, justifyContent: 'center'}}>
    {topics.map((topic)=>{
        return (
           
            <Button size='small'component={Link} to={`/${topic.slug}/articles`}  key={topic.slug} endIcon={<Article/>}>{topic.slug}</Button>
           
        )
    })}
    </ButtonGroup>
)
}

export default Topics;

