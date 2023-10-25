import { useDispatch } from "react-redux"
import { appendAnecdote } from "../reducers/anecdoteReducer"
import anecdoteService from "../services/anecdotes"
import { setNotificationWithTimeout } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
    dispatch(setNotificationWithTimeout(`You created "${newAnecdote.content}"`, 5))
  }
  return (
    <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote} >
            <div><input type="text/input" name="anecdote" /></div>
            <button type="submit">create</button>
        </form>
    </>
)
}

export default AnecdoteForm