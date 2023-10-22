import { createSlice } from "@reduxjs/toolkit"

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
    createAnecdote (state, action) {
      state.push(action.payload)
    },
    appendAnecdote (state, action) {
      state.push(action.payload)
    }
  }
})

export const { incrementVoteOf, createAnecdote, appendAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer