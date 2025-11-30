import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import Services from './components/Services'
import NotFound from './components/NotFound'

function App() {

  return (
    <div className="main-container">
      <Header />

      <Routes>
        <Route path='/'       element={ <Home />}/>
        <Route path='/about'  element={ <About/>}/>
        <Route path='/services'       element={ <Services/>}/>
        <Route path='/support'       element={ <Support /> }/>
        <Route path='*'       element={  <NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
