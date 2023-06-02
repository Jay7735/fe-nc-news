import {React, useState, useEffect} from 'react'
import {patchVotes} from './utils/ApiFunctions'

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
    <li>Votes: {votes + userVote}</li>
    <button onClick={() => upVote()}>UP</button>
    <button onClick={() => downVote()}>DOWN</button>
    </>
)
}

export default Votes