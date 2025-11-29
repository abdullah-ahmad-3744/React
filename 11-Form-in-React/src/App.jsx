
import './App.css'

function App() {
  function firstNameChangeHandler (event) {
    console.log(event.target.value);
    
  }

  function lastNameChangeHandler (event) {
    console.log(event.target.value)
  }

  function emailHandler (event) {
    console.log(event.target.value)
  }
  return (
    <div className="main-container">
      <h1>Forms In React </h1>
      <form action="">
        <input type="text" name="" id="" placeholder='First Name :- ' onChange={firstNameChangeHandler} />
        <br />
        <br />
        <input type="text" name="Last Name" id="" placeholder='Last Name: -'  onChange={lastNameChangeHandler}/>
        <br />
        <br />
        <input type="email" name ="" placeholder='Email:- ' onChange={emailHandler} />
        <br />
      </form>
    </div>
  )
}

export default App
