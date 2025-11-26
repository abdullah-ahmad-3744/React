
import './App.css'
import Filter from './components/Filter'
import Cards from './components/Cards'

function App() {

  return (
    <div className="main-container">
      <div className="header">
        <h1>Top Courses</h1>
      </div>
      <div className="filters">
        <Filter />
      </div>
      <div className="cards">
        <Cards />
      </div>
    </div>
  )
}

export default App
