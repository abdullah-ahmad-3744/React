
import './App.css'
import { useState } from 'react'
import data from "./data"
import Tours from './components/Tours'
function App() {
  const [tours, setTours] = useState(data)


  function RemoveTour (id) {
    const newTours = tours.filter(tour =>  tour.id != id);
      setTours(newTours)
  }

  if (tours.length === 0) {
    return (
      <div className="referesh">
        <h1>No Tour Left</h1>
        <button className='referesher-button' onClick={() => setTours(data)}>Referesh</button>
      </div>
    )
  }

  return (
    <div className="main-container">
      <Tours tours ={tours} RemoveTour= {RemoveTour} />
    </div>
  )
}
export default App
