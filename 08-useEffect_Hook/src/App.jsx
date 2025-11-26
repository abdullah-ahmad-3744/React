
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text , setText] = useState('')
  const [name , setName] = useState('')

  // Frst variation of useEffect() Hook
  // In this variation code inside the useEffect Hook runs everytime UI is Updated 

  // useEffect( () => {
  //   console.log("UI rendering done");
    
  // })



  // Second variation of the useEffect() Hook
  // In this variation useEffect() runs only on the first render of the component 

  // useEffect ( () => {
  //   console.log("Runs only on the first render");
    
  // }, [])



  // Third variation of useEffect()
  // In this variation useEffect() runs on the first render + dependency chnages

  // useEffect ( () => {
  //   console.log("Runs on the first render and dependency change");
    
  // },[text]);

  // useEffect ( () => {
  //   console.log("Runs on the first render and dependency change");
  // },[name])




  // Fourth variation of the useEffect() Hook
  // This is used to for the cleaning purposes , like removing the previous event listener before adding the new one, like unmounting the component before mounting it.

  useEffect ( () => {
    console.log("Listener Added");
    return () => {
      console.log("Listener Removed");
    }
  }, [text])



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
