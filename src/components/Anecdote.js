import { useDispatch } from 'react-redux'
import { handleIncrementVote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from './../reducers/notificationReducer'

const Anecdote = ({ id, content, votes }) => {
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(handleIncrementVote(id))
    dispatch(setNotificationWithTimeout(`You voted for "${content}"`, 5))
  }

  return (
    <div className="anecdote">
        <div>
            {content}
        </div>
        <div>
            has {votes}
            <button onClick={() => vote(id)}>vote</button>
        </div>
    </div>
)
}

export default Anecdote