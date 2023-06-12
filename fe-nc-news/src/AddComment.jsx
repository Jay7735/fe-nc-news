import {React, useState, useEffect} from 'react'
import { postComment } from "./utils/ApiFunctions";

import CircularProgress from '@mui/material/CircularProgress'
import { Button, TextField } from '@mui/material';
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
    <form onSubmit={handleSubmit} style={{padding: '10px'}}>

    <TextField
          label="Username"
          value={commentAuthor}
          onChange={(event) => setCommentAuthor(event.target.value)}
          required
          variant="outlined"
          fullWidth
        />

<TextField
          label="Your comment"
          type="text"
          value={commentBody}
          onChange={(event) => setCommentBody(event.target.value)}
          required
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
        <Button color="primary" type="submit" variant="contained" endIcon={<Publish />}>Submit</Button>
    </form>   
    </>
)
}

export default AddComment