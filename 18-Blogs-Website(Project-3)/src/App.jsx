import './App.css'
import Blogs from './components/Blogs'
import Header from './components/Header'
import Pagination from './components/Pagination'

function App() {
  return (
    <div className="main-container">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App
