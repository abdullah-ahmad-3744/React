import { useState } from "react"
import "./Counter.css"
function Counter (){
    const [count, setCount] = useState(0)


    function increment () {
        setCount(count + 1)
    }
    function decrement () {
        setCount(count - 1)
    }
    return (
        <div className="counter-container">
            <button onClick={decrement}>Decrement</button>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )

}
export default Counter