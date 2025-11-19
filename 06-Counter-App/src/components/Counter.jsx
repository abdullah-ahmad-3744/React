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

    function ResetHandler () {
        setValue(0)
        console.log("Value is set to 0");
        
    }
    return (
        <div>
            <div className="counter-container">

            <div className="decrement">
                <button onClick={DecrementHandler}>Decrement | </button>
            </div>

            <div className="result">
                <p className="value">{value}</p>
            </div>

            <div className="increment">
                <button onClick={IncrementHandler}> | Increment</button>
            </div>
        </div>
        <div className="reset">
                <button onClick={ResetHandler} className="reset">Reset</button>
            </div>
        </div>
    )
}
export default Counter