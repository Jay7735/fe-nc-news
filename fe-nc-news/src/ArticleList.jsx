import Button from '@mui/material/Button'
import ReadMore from '@mui/icons-material/ReadMore'
import ShareIcon from '@mui/icons-material/Share'
import React from 'react'
import {Avatar, Card, CardContent, CardMedia, Grid, Paper, CardHeader, Container} from '@mui/material'
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

const ArticleList = ({articles}) => {
return (
    <>


<Container sx={{ bgcolor: red[500] }} >
    <Grid container justify="center"  alignItems="center" justifyContent="center">
    {articles.map((article)=>{
            return(    
                <Grid item sm={12} lg={6} key={article.article_id}>


<Card sx={{ maxWidth: 600}}>
      <CardHeader
        title={article.title}
        
      />
      <CardMedia
        component="img"
        height="200"
        image={article.article_img_url}
        alt={article.title}
      />
      <CardContent>
        <Typography variant="body2" color="text">
          Author: {article.author}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Date: {article.created_at.slice(0,10)}
        </Typography>
        <Button href={`/articles/${article.article_id}`} variant="contained" endIcon={<ReadMore/>} color="secondary">Read more</Button>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
                </Grid>
            )
        })}
    </Grid>
    </Container>
    </>
)
}

export default ArticleList

