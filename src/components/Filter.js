import { filterChange } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";

const Filter = (props) => {
    const dispatch = useDispatch()

    const handleFilterChange = (event) => {
        dispatch(filterChange(event.target.value))
    }

    return (
        <div className="filter">    
            Filter: <input type="text/input" name="filter" onChange={handleFilterChange} />
        </div>
    )
}

export default Filter