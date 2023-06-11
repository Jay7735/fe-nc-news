import {React, useState, useEffect} from 'react'
import {patchVotes} from './utils/ApiFunctions'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import ThumbUp from '@mui/icons-material/ThumbUp'
import ThumbDown from '@mui/icons-material/ThumbDown'
import { Box } from '@mui/material'

const Votes = ({article_id, votes}) => {
    const [userVote, setUserVote] = useState(0)

function upVote() {
    setUserVote(userVote + 1)
patchVotes(article_id, 1)
}

function downVote() {
    setUserVote(userVote - 1)
patchVotes(article_id, -1)
}
    return (
    <>
  
    <Box sx={{ mb: 1, display: 'flex', flexDirection: 'column'}}>
       <span>Votes: {votes + userVote}</span> 
    <ButtonGroup variant="contained">
    <Button onClick={() => upVote()} endIcon={<ThumbUp/>}>UP</Button>
    <Button onClick={() => downVote()} endIcon={<ThumbDown/>}>DOWN</Button>
    </ButtonGroup>
    </Box>
    </>
)
}

export default Votes