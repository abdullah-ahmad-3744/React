import './Login.css'
import Template from '../components/Template'
import login from '../assets/login.png'
import frame from '../assets/frame.png'
function Login ({IsLoggedIn,setIsLoggedIn}) {
    return (
        <div className="login-container">
            <Template className = 'template-wrapper'
            title = "Welcome Back" 
            description1="Build skills for today , tomorrow and beyond." 
            description2="Education for future proof you career." 
            formType= "loginForm" 
            Image={login} 
            frame = {frame} 
            setIsLoggedIn = {setIsLoggedIn}/>
        </div>
    )
}
export default Login