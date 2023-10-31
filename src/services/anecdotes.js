import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    // console.log('anecdotes > getAll', response.data)
    return response.data
}

const createNew = async (content) => {
    const object = { content }
    object.votes = 0
    const response = await axios.post(baseUrl, object)
    return response.data
}

const incrementVote = async (id) => {
    const anecdote = await axios.get(`${baseUrl}/${id}`)
    console.log('anecdote', anecdote)
    const anecdoteVotes = await axios.patch(`${baseUrl}/${id}`, {
        "votes": anecdote.data.votes + 1
    })
    return anecdoteVotes
}

export default { getAll, createNew, incrementVote }