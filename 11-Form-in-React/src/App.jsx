
import { useState } from 'react'
import './App.css'

function App() {

  const [formData , setFormData] = useState( 
    {firstName : '', lastName : '', email : ''}
   )


  function changHandler (event) {
    setFormData( (previousFormData) => {
      return {
        ...previousFormData,
        [event.target.name] :  event.target.value
      }
    })

    console.log(event.target.value);
    

  }
  // function firstNameChangeHandler (event) {
  //   console.log(event.target.value);
    
  // }

  // function lastNameChangeHandler (event) {
  //   console.log(event.target.value)
  // }

  // function emailHandler (event) {
  //   console.log(event.target.value)
  // }


  return (
    <div className="main-container">
      <h1>Forms In React </h1>
      <form action="">
        <input type="text" name="firstName" id="" value={formData.firstName} placeholder='First Name :- ' onChange={changHandler} />
        <br />
        <br />
        <input type="text" name="lastName" id="" value={formData.lastName} placeholder='Last Name: -'  onChange={changHandler}/>
        <br />
        <br />
        <input type="email" name ="email" value={formData.email} placeholder='Email:- ' onChange={changHandler} />
        <br />
      </form>
    </div>
  )
}

export default App
