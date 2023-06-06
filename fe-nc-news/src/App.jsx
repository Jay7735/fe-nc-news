import './styles/App.css'
import Articles from './Articles'
import {Routes, Route, Link} from "react-router-dom"
import ArticlePage from './ArticlePage'
import TopicArticles from './TopicArticles'
import Button from '@mui/material/Button'
import Newspaper from '@mui/icons-material/Newspaper'
// import HomePage from './HomePage'

function App() {
  return (
    <>
    
      <h1>NC News</h1>
      <p className="read-the-docs">
        The only social news website you will need.
      </p>
      <div className="buttonZone">
          <Link to='/articles'>
            <Button
            endIcon={<Newspaper/>}
            size='medium'
            variant="contained"
            color='secondary'
             >Articles</Button>
          </Link>
        </div>
        
        <Routes>
          {/* <Route path="" element={<HomePage />} /> */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/:topic/articles" element={<TopicArticles />}/>
        </Routes>
        
    </>
  )
}

export default App
