const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  let newState = [...state]
  if (action.type === 'INCREMENT_VOTE') {
    newState = newState.map((anecdote) => {
      if (anecdote.id === action.payload.id) {
        return { ...anecdote, votes: anecdote.votes + 1 }
      }
      return anecdote
    })
  }
  if (action.type === 'NEW_ANECDOTE') {
    console.log('NEW_ANECDOTE', action)
    const newAnecdote = asObject(action.payload.anecdote)
    newState.push(newAnecdote)
  }
  console.log('state after:', newState)
  return newState
}

export const incrementVoteOf = (id) => {
  return {
    type: 'INCREMENT_VOTE',
    payload: { id }
  }
}

export const newAnecdote = (anecdote) => {
  console.log('newAnecdote', anecdote)
  return {
    type: 'NEW_ANECDOTE',
    payload: { anecdote }
  }
}

export default reducer