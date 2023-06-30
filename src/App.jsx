import './styles/index.css'
import Articles from './Articles'
import {Routes, Route, Link} from "react-router-dom"
import ArticlePage from './ArticlePage'
import TopicArticles from './TopicArticles'
import HomePage from './HomePage'
import theme from './Theme'
import { ThemeProvider } from '@mui/material'
import { Navbar } from './Navbar'



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar/>
      <div sx={{margin: 2}}>
          
            {/* <Button component={Link}
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
             >Home</Button> */}
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
