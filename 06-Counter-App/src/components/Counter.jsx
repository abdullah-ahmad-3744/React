import "./Counter.css"
function Counter () {
    return (
        <div className="counter-container">

            <div className="increment"><button>Increment</button></div>
            <div className="result"><p>Value</p></div>
            <div className="decrement"><button>Decrement</button></div>

        </div>
    )
}
export default Counter