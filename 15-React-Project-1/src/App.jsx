import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ParentRoute from './components/ParentRoute'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="app-container">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>

        <Route path='/' element={<ParentRoute />}>
          <Route index element={<Home />} />
          <Route path='/signUp' element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='dashboard' element={<Dashboard />} />

        </Route>


      </Routes>
    </div>
  )
}

export default App
