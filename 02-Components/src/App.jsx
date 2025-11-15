
import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <div className="main-container">
      <Header />
      {/* Cards */}
      <div className="cards">
        <FirstComponent/>
        <SecondComponent />
        <ThirdComponent />
      </div>
      {/* Login Fomr */}
    <LoginForm />
    {/* Footer */}
    <Footer />
    
    </div>
    </>
  )
}

export default App
