import {React, useState, useEffect} from 'react'
import { postComment } from "./utils/ApiFunctions";
import "./styles/articles.css"

const AddComment = ({article_id}) => {
const [formData, setFormData] = useState({})
const [commentAuthor, setCommentAuthor] = useState("")
const [commentBody, setCommentBody] = useState("")
const [returnComment, setReturnComment] = useState ()
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
        setReturnComment(response)
        setCommentAuthor("")
        setCommentBody("")
        setFormData({})
    }).then(()=>setIsLoading(false))
}

{if (isLoading===true){
    return <p>Patience please, your comment is being added...</p>
}}

return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Your name:
            <input type="text" value={commentAuthor} onChange={(event)=> setCommentAuthor(event.target.value)} required />
        </label>
        <label>Your comment:
            <input type="text" value={commentBody} onChange={(event)=> setCommentBody(event.target.value)} required />
        </label>
        <input type="submit" value="Submit"/>
    </form>
    {returnComment ? (
<div className="newComment">
    <p>{returnComment.body}</p>
                <div className="authorVotes">
                <p>Author: {returnComment.author}</p>
                <p>Votes: {returnComment.votes}</p>
                </div>
                </div>
    ) : null }
    </>
)

}


export default AddComment