import {React, useState, useEffect} from 'react'
import { postComment } from "./utils/ApiFunctions";

import CircularProgress from '@mui/material/CircularProgress'
import { Button } from '@mui/material';
import Publish from '@mui/icons-material/Publish'

const AddComment = ({article_id, setComments}) => {
const [formData, setFormData] = useState({})
const [commentAuthor, setCommentAuthor] = useState("jessjelly")
const [commentBody, setCommentBody] = useState("")
const [isLoading, setIsLoading] = useState(false)

useEffect(()=>{
    
    setFormData({
        author: commentAuthor,
        body: commentBody 
    })
}, [commentAuthor, commentBody])

const handleSubmit = (event) => {
    setIsLoading(true)
    event.preventDefault()
    postComment(formData, article_id).then((response)=>{
        setComments((currComments)=>{
            return [response, ...currComments]
        })
        setCommentBody("")
        setFormData({})
    }).then(()=>setIsLoading(false))
}

{if (isLoading===true){
    return (<><p><CircularProgress/>Patience please, your comment is being added...</p></>)
}}

return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Username: {commentAuthor}{' '}
        </label>
        <label>Your comment:
            <input type="text" value={commentBody} onChange={(event)=> setCommentBody(event.target.value)} required />
        </label>
        <button color="primary" variant="outlined" endIcon={<Publish />}>Submit</button>
    </form>   
    </>
)
}

export default AddComment