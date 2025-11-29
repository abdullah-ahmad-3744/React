
import { useState } from 'react'
import './App.css'

function App() {

  const [formData , setFormData] = useState( 
    {firstName : '', lastName : '', email : '', textArea : '', isVisible : true, mode : "" ,    favoriteCar : ''}
   )

   function changHandler (event) {
    const {name , value , checked, type} = event.target
    setFormData( (previousFormData) => {
      return {
        ...previousFormData,
        [name] : type === "checkbox" ? checked :  value
      }
    })
  }

  function SubmitHandler(event) {
    event.preventDefault()
    console.log("Submitting the form.................")
    console.log(formData)
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
      <form action="" onSubmit={SubmitHandler}>
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

        <br />
        <br />
        <fieldset>
          <legend>Mode : </legend>
           <input 
        type="radio" 
        name="mode" 
        id="online-mode" 
        value="online-mode" 
        onChange={changHandler} 
        checked = {formData.mode === "online-mode"}/>
        <label htmlFor="online-mode">Online Mode</label>
        <input 
        type="radio"
         name="mode"
        id="offline-mode"
        value="offline-mode"
        onChange={changHandler}
        checked = {formData.mode === "offline-mode"}
           />
        <label htmlFor="offine-mode">Offline Mode</label>
        </fieldset>

        <br />
        <br />
        <label htmlFor="favoriteCar">Select Your Favorite Car</label>
        <select 
        name="favoriteCar" 
        id="favoriteCar"
        value={formData.favoriteCar}
        onChange={changHandler}>
          <option value="Civic">Civic</option>
          <option value="Scarpio">Scarpio</option>
          <option value="Tharrr">Tharr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
        </select>
        <br />
        <br />
        <button>Submit Form</button>
      </form>
    </div>
  )
}

export default App
