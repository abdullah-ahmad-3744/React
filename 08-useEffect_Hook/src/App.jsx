
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text , setText] = useState('')

  // Frst variation of useEffect() Hook
  // In this variation code inside the useEffect Hook runs everytime UI is Updated 
  useEffect( () => {
    console.log("UI rendering done");
    
  })


  
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
