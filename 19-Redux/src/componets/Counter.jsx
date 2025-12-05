import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/slice/CounterSlice"

function Counter () {
    const  count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="counter">
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <p>Count = {count}</p>
            <button onClick={()=> dispatch(increment())}>Increment</button>
        </div>
    )
}
export default Counter