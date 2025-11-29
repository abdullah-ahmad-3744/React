
import { useState } from 'react'
import './App.css'

function App() {

  const [formData , setFormData] = useState( 
    {firstName : '', lastName : '', email : '', textArea : '', isVisible : true}
   )

   console.log(formData)
  function changHandler (event) {
    const {name , value , checked, type} = event.target
    setFormData( (previousFormData) => {
      return {
        ...previousFormData,
        [name] : type === "checkbox" ? checked :  value
      }
    })
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
        <br />

        <textarea name="textArea" value = {formData.textArea} placeholder="Type A comment" onChange = {changHandler}/>

        <br />
        <br />

        <input type="checkbox" name='isVisible' id='isVisible'checked={formData.isVisible}  onChange={changHandler}/>
        <label htmlFor="isVisible">Am I visible ?</label>
      </form>
    </div>
  )
}

export default App
