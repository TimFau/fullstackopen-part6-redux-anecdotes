import { useDispatch } from "react-redux"
import { newAnecdote } from "../reducers/anecdoteReducer"

const CreateAnecdote = () => {
    const dispatch = useDispatch()
  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(newAnecdote(anecdote))
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

export default CreateAnecdote