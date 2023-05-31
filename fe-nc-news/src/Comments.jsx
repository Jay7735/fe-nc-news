import getComments from './utils/GetComments'
import {React, useState, useEffect} from 'react'

const Comments = ({article_id}) => {
 const [comments, setComments] = useState([])
 useEffect(()=>{
    getComments(article_id).then((commentData)=>{
        setComments(commentData)
    })
    }, [article_id])
return (
<>
<h3>Comments</h3>
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