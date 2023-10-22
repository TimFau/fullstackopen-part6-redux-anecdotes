import { useDispatch } from 'react-redux'
import { incrementVoteOf } from './../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from './../reducers/notificationReducer'

const Anecdote = ({ id, content, votes }) => {
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(incrementVoteOf(id))
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