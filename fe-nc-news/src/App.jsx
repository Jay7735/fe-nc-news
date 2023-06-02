import './styles/App.css'
import Articles from './Articles'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import ArticlePage from './ArticlePage'
import TopicArticles from './TopicArticles'

function App() {
  return (
    <>
      <h1>NC News</h1>
      <p className="read-the-docs">
        The only social news website you will need.
      </p>
      <BrowserRouter>
      <div className="buttonZone">
          <Link to='/articles'>
            <button className="button-45">Articles</button>
          </Link>
        </div>
        
        <Routes>
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/:topic/articles" element={<TopicArticles />}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
