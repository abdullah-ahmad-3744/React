
import { useState } from 'react'
import './App.css'

function App() {
  const [text , setText] = useState('')
  function ChangeHandler(event) {
    setText(event.target.value)
    console.log(text);
    
  }

  return (
    <div className="main-container">
      <h1>useEffect Hook in React</h1>
      <input type="text" onChange={ChangeHandler} />
    </div>
  )
}

export default App
