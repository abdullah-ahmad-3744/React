import './SignUp.css'
import  signUp from '../assets/signup.png'
import frame from '../assets/frame.png'
import Template from '../components/Template'
function SignUp({setIsLoggedIn}) {
    return (
        <div className="signUp-page-container">
            <Template 
            title = "Join the millions learning to code with StudyNotion for free" 
            description1="Build skills for today , tomorrow and beyond." 
            description2="Education for future proof you career."
            formType= "signUp"
            Image={signUp} 
            frame = {frame} 
            setIsLoggedIn={setIsLoggedIn}/>
        </div>
    )
}
export default SignUp