import './App.css'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Header from './components/Header'
import { apiUrl, filterData } from './data'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Loader from './components/Loader'

function App() {
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await fetch(apiUrl)
        const jsonData = await apiResponse.json()
        setCourses(jsonData.data)
        setLoading(false)
      } catch (error) {
        toast.error("Something Went wrong:- ")
      }
    }
    fetchData()
  }, [])

  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="filters">
        <Filter filterData={filterData} category = {category} setCategory = {setCategory} />
      </div>
      <div className="cards">
        {loading ? <Loader /> :  <Cards  courses = {courses}  category = {category}/> }
      </div>
    </div>
  )
}

export default App
