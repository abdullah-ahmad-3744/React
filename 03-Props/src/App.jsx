import './App.css'
import FirstComponent from './component/FirstComponent'
import SecondComponent from './component/SecondComponent'
import ThirdComponent from './component/ThirdComponent'

function App() {

  return (
    <>
    <div className="Main-container">
      <div className="cards">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    </div>
    </>
  )
}

export default App
