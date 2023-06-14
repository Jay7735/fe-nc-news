import './styles/App.css'
import Articles from './Articles'
import {Routes, Route, Link} from "react-router-dom"
import ArticlePage from './ArticlePage'
import TopicArticles from './TopicArticles'
import Button from '@mui/material/Button'
import Newspaper from '@mui/icons-material/Newspaper'
import HomePage from './HomePage'
import HomeIcon from '@mui/icons-material/Home';
import theme from './Theme'
import { ThemeProvider } from '@mui/material'



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <h1>NC News</h1>
      <p>
        The only social news website you will need.
      </p>
      <div sx={{margin: 2}}>
          
            <Button component={Link}
            to='/articles'
            endIcon={<Newspaper/>}
            size='medium'
            variant="contained"
            color='secondary'
            sx={{margin: 0.5}}
             >Articles</Button>
          
            <Button
            component={Link}
            to='/'
            endIcon={<HomeIcon/>}
            size='medium'
            variant="contained"
            color='secondary'
             >Home</Button>
        </div>
        
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/:topic/articles" element={<TopicArticles />}/>
        </Routes>
        </ThemeProvider>
    </>
  )
}

export default App
