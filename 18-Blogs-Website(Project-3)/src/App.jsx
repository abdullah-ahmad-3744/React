import { useContext } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Header from './components/Header'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContextProvider'

function App() {
  const {fetchData} = useContext(AppContext)
  fetchData()
  return (
    <div className="main-container">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App
