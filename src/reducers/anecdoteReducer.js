import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    incrementVoteOf (state, action) {
      const id = action.payload
      return state.map((anecdote) => {
        if (anecdote.id === id) {
          return { ...anecdote, votes: anecdote.votes + 1 }
        }
        return anecdote
      })
    },
    newAnecdote (state, action) {
      const newAnecdote = asObject(action.payload)
      state.push(newAnecdote)
    },
    appendAnecdote (state, action) {
      state.push(action.payload)
    }
  }
})

export const { incrementVoteOf, newAnecdote, appendAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer