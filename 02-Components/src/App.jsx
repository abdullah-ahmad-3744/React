
import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import LoginForm from './components/LoginForm'
function App() {

  return (
    <>
    <div className="main-container">
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
