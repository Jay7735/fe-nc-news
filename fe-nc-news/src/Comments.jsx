import {getComments} from './utils/ApiFunctions'
import {React, useState, useEffect} from 'react'
import AddComment from './AddComment'
import "./styles/articles.css"

const Comments = ({article_id}) => {
 const [comments, setComments] = useState([])
 const [isLoading, setIsLoading] = useState(false)
 useEffect(()=>{
    setIsLoading(true)
    getComments(article_id).then((commentData)=>{
        setComments(commentData)
    }).then(()=>setIsLoading(false))
    }, [article_id])
    {if (isLoading===true){
        return <p>Comments loading, please wait...</p>
    }}
return (
<>
<h3>Comments</h3>
<AddComment article_id={article_id} setComments={setComments} />
    <div className="commentGrid">
    {comments.length > 0 ?(
    
    comments.map((comment)=>{
        return (
            <div className="commentCard" key={comment.comment_id}>
                <p>{comment.body}</p>
                <div className="authorVotes">
                <p>Author: {comment.author}</p>
                <p>Votes: {comment.votes}</p>
                </div>
            </div>
        )
    })): (
        <p>There are no comments for this article yet.</p>
    )}
</div>
</>
)
}

export default Comments 