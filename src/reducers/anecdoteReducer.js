import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"

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
    },
    setAnecdotes (state, action) {
      return action.payload
    }
  }
})

export const { incrementVoteOf, createAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    console.log('anecdotes', anecdotes)
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer