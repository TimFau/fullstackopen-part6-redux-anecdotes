import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"
import { setNotificationWithTimeout } from "../reducers/notificationReducer"

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
    appendAnecdote (state, action) {
      state.push(action.payload)
    },
    setAnecdotes (state, action) {
      return action.payload
    }
  }
})

export const { incrementVoteOf, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    console.log('anecdotes', anecdotes)
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    console.log('newAnecdote', newAnecdote)
    dispatch(appendAnecdote(newAnecdote))
    dispatch(setNotificationWithTimeout(`You created "${newAnecdote.content}"`, 5))
  }
}

export const handleIncrementVote = (id) => {
  return async dispatch => {
    const anecdote = await anecdoteService.incrementVote(id)
    dispatch(incrementVoteOf(anecdote.data.id))
  }
}

export default anecdoteSlice.reducer