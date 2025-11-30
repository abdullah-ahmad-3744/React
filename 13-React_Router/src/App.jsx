import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import Services from './components/Services'
import NotFound from './components/NotFound'
import ParentRoute from './components/ParentRoute'

function App() {

  return (
    <div className="main-container">
      <Header />

      <Routes>
        <Route path ="/" element ={<ParentRoute/>} >

          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/support' element={<Support />} />
          <Route path='*' element={<NotFound />} />


        </Route>

      </Routes>
    </div>
  )
}

export default App
