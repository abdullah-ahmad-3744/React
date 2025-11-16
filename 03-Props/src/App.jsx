import './App.css'
import FirstComponent from './component/FirstComponent'
import SecondComponent from './component/SecondComponent'
import ThirdComponent from './component/ThirdComponent'
import Card from './component/Card'



const data = [
  {
    "id": 1,
    "title": "Card 1",
    "description": "This is a short description for Card 1."
  },
  {
    "id": 2,
    "title": "Card 2",
    "description": "This is a short description for Card 2."
  },
  {
    "id": 3,
    "title": "Card 3",
    "description": "This is a short description for Card 3."
  }
]

function App() {

  return (
    <>
    <div className="Main-container">
      <div className="cards">
        {/* <FirstComponent title =  {data[0].title}  description = {data[0].description}/>
        <SecondComponent title = {data[1].title}  description = {data[1].description} />
        <ThirdComponent  title = {data[2].title}  description = {data[2].description}/> */}

        <Card title =  {data[0].title}  description = {data[0].description} />
        <Card title =  {data[1].title}  description = {data[1].description} />
        <Card title =  {data[2].title}  description = {data[2].description} />
      </div>
    </div>
    </>
  )
}

export default App
