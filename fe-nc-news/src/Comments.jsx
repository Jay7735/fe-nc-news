import {getComments} from './utils/ApiFunctions'
import {React, useState, useEffect} from 'react'
import AddComment from './AddComment'
import {Card, CardContent, CardMedia, Grid, CardHeader, Container, Typography} from '@mui/material'

import CircularProgress from '@mui/material/CircularProgress'

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
        return (<><CircularProgress /><p>Comments loading, please wait...</p></>)
    }}
return (
<>
<h3>Comments</h3>

<Grid container justify="center" alignItems="center" direction="row" sx={{ width: '100%' }}>
<Typography>
    Comment section
</Typography>
<Grid item item xs={12}>
<AddComment article_id={article_id} setComments={setComments} />
</Grid>
{comments.length > 0 ?(
    
    comments.map((comment)=>{
        return (
            <Grid item xs={12} key={comment.comment_id}  key={comment.comment_id}>
                <Card sx={{ margin:2}}>
                    <CardHeader
                    title={comment.author}
                    />
                    <CardContent>
                        <Typography>
                        {comment.body}
                        </Typography>
                        <Typography>
                        Author: {comment.author}
                        </Typography>
                        <Typography>
                        Votes: {comment.votes}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    })): (
        <p>There are no comments for this article yet.</p>
    )}
</Grid>
</>
)
}

export default Comments 