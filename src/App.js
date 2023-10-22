import Filter from './components/Filter'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import { useDispatch  } from 'react-redux'
import { useEffect } from 'react'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  return (
    <div>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App