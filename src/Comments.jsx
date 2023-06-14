import {getComments} from './utils/ApiFunctions'
import {React, useState, useEffect} from 'react'
import AddComment from './AddComment'
import {Card, CardContent, CardMedia, Grid, CardHeader, Container, Typography, CardActions} from '@mui/material'

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
<Typography variant="h4" align="center" gutterBottom>
    Comment section
</Typography>
<Grid container justify="center" alignItems="center" direction="row" sx={{ width: '100%' }}>

<Grid item xs={12}>
    <Card sx={{margin: 2}}>
    <AddComment article_id={article_id} setComments={setComments} />

    </Card>

</Grid>
{comments.length > 0 ?(
    
    comments.map((comment)=>{
        return (
            <Grid item xs={12} key={comment.comment_id}  >
                <Card sx={{ margin:2, backgroundColor: 'white' }}>
                    <CardHeader
                    title={comment.author}
                    />
                    <CardContent>
                        <Typography>
                        {comment.body}
                        </Typography>
                        <Typography variant='body2' color="text.secondary">
                        Author: {comment.author}
                        </Typography>
                        <Typography color="text.secondary">
                        Votes: {comment.votes}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        
                    </CardActions>
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