import { useSelector } from 'react-redux'
import Anecdote from './Anecdote'

const Anecdotes = () => {
  const anecdotes = useSelector(state => state)
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

export default Anecdotes