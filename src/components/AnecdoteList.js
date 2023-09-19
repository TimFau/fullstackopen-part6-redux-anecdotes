import { useSelector } from 'react-redux'
import Anecdote from './Anecdote'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    // console.log('anecdotes state', state)
    if (state.filter.length > 0) {
      return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    }
    return state.anecdotes
  })
  const sortedAnecdotes = anecdotes.toSorted((a, b) => {
    return b.votes - a.votes
  })

  return (
    <>
    <h2>Anecdotes</h2>
    {sortedAnecdotes.map(anecdote =>
        <Anecdote
            key={anecdote.id}
            id={anecdote.id}
            content={anecdote.content}
            votes={anecdote.votes}
        />
    )}
    </>
  )
}

export default AnecdoteList