import "./Counter.css"
import { useState } from "react"
function Counter() {

    const [value, setValue] = useState(0)
    function IncrementHandler () {
        setValue(value+1)
        console.log("Increment Button Clicked");
        
    }

    function DecrementHandler() {
        setValue(value-1)
        console.log("Decrement Button Clicked");
        
    }


    return (
        <div className="counter-container">

            <div className="increment">
                <button onClick={IncrementHandler}>Increment</button>
            </div>

            <div className="result">
                <p>{value}</p>
            </div>

            <div className="decrement">
                <button onClick={DecrementHandler}>Decrement</button>
            </div>

        </div>
    )
}
export default Counter