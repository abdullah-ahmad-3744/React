import './App.css'
import { reviews } from './data'
import Testimonial from './components/Testimonial'
function App() {

  return (
    <div className="main-container">
      <div className="heading">
        <h1>Our Testimonials</h1>
      </div>
      <div className="underlines"></div>
      <Testimonial  reviews = {reviews}/>
    </div>
  )
}

export default App
