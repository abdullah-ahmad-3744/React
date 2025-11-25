import './App.css'
import { useState } from 'react'
import data from "./data"
import Tours from './components/Tours'

function App() {
  const [tours, setTours] = useState(data)
  const [loading, setLoading] = useState(false);

  function RemoveTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours)
  }

  function handleRefresh() {
    setLoading(true);

    setTimeout(() => {
      setTours(data);
      setLoading(false);
    }, 1500); // fake loading delay
  }

  if (tours.length === 0) {
    return (
      <div className="referesh">
        <h1>No Tour Left</h1>

        <button
          className={`referesher-button ${loading ? "loading" : ""}`}
          onClick={handleRefresh}
          disabled={loading}
        >
          {loading ? (
            <div className="spinner"></div>
          ) : (
            "Refresh"
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="main-container">
      <header className="main-header">
        <h1>Plan With Us</h1>
      </header>

      {/* Fade-in animation when cards appear */}
      <div className={loading ? "fade" : "fade show"}>
        <Tours tours={tours} RemoveTour={RemoveTour} />
      </div>
    </div>
  )
}
export default App;
