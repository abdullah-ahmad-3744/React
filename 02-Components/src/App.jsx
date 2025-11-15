
import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import LoginForm from './components/LoginForm'
import Header from './components/Header'
function App() {

  return (
    <>
    <div className="main-container">
      <Header />
      <div className="cards">
        <FirstComponent/>
        <SecondComponent />
        <ThirdComponent />
      </div>
    <LoginForm />
    
    </div>
    </>
  )
}

export default App
