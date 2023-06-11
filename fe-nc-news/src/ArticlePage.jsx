import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {getArticle} from './utils/ApiFunctions'; 
import './styles/articlePage.css'
import Comments from './Comments.jsx'
import Votes from './Votes.jsx'
import LinearProgress from '@mui/material/LinearProgress'


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const ArticlePage = () => {
  const { article_id } = useParams(); 
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    getArticle(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return (<><p>Loading article, please wait...</p>
    <LinearProgress/></>);
  }

  return (
    
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    
    }}>
{article && (
<Card sx={{ width: '80vw', mx: 'auto', margin: 2 }}>
      <CardHeader
       
        title={article.title}
        subheader={article.author}
      />
      <CardMedia
        component="img"
        height="400"
        image={article.article_img_url}
        alt={article.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Date: {article.created_at}
        </Typography>
        <Typography paragraph>
        {article.body}
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Votes article_id={article_id} votes={article.votes} />
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
)}
    <div style={{ margin: '2rem' }}>
      <Comments article_id={article_id} />
      </div>
    </Container>
  )
};

export default ArticlePage;