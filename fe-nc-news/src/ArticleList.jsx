import Button from '@mui/material/Button'
import ReadMore from '@mui/icons-material/ReadMore'
import React from 'react'

const ArticleList = ({articles}) => {
return (
    <>
    <div className="articleGrid">
        {articles.map((article)=>{
            return(
                <div className="articleCard" key={article.article_id}>
                    <img src={article.article_img_url} alt={article.title} className="imageStyle"/>
                    <div className="articleCardContent">
                    <h3>{article.title}</h3>
                    <p>Author: {article.author}</p>
                    <p>Comment Count: {article.comment_count}</p>
                    <div className="navigateAway">
                        <Button href={`/articles/${article.article_id}`} variant="contained" endIcon={<ReadMore/>} color="secondary">Read more</Button>
                    </div> 
                    </div>
                </div>
            )
        })}
    </div>

    </>
)
}

export default ArticleList

