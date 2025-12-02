import './Template.css'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
function Template ({title, description1, description2, Image,frame, formType ,setIsLoggedIn}) {
    return (
        // Template for the common elements of the Login and SignUp components
        <div className="template-container">
            {/* left Part of the template */}
            <div className="left-part">

                <div className="title">
                    <h1>{title}</h1>
                </div>

                <div className="description">
                    <p>
                        <span>{description1}</span>
                        <span> {description2}</span>
                    </p>
                </div>

                <div className="form-type">
                    {formType === "signUp" ? 
                    (<SignUpForm   setIsLoggedIn={setIsLoggedIn}/> ) : 
                    (<LoginForm    setIsLoggedIn={setIsLoggedIn}/>)
                }
                </div>

                <div className="OR-text">
                    <div className="line"></div>
                    <p>OR</p>
                    <div className="line"></div>
                </div>


                <div className="singin-with-google">
                    <button>Sign In With Google</button>
                </div>

            </div>
            {/* Right part of the template */}
            <div className="right-part">
                <div className="frame"> <img src={frame} alt="" /></div>
                <div className="image"><img src={Image} alt="" /></div>
            </div>
        </div>
    )
}
export default Template