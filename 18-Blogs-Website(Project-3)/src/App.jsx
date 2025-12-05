import { useContext } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Header from './components/Header'
import Pagination from './components/Pagination'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Tag from './pages/Tag'
import Category from './pages/Category'
import { AppContext } from './context/AppContextProvider'
import { useEffect } from 'react'
import { Routes , Route, useSearchParams, useLocation} from 'react-router-dom'

function App() {
  const {fetchBlogsData} = useContext(AppContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  useEffect ( () => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split('/').at(-1).replaceAll('-' ,' ')
      fetchBlogsData(Number(page), tag)
    } else if (location.pathname.includes('categories')){
      const category = location.pathname.split('/').at(-1).replaceAll('-', ' ')
      fetchBlogsData(Number(page),null, category)
    } else {
      fetchBlogsData(Number(page))
    }
  }, [location.pathname, location.search])
  return (
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/blog/:blogId' element= {<Blog/>}/>
      <Route path="/tags/:tagId" element={<Tag/>} />
      <Route path='/categories/:category' element= {<Category/>}/>
    </Routes>
  )
}

export default App
