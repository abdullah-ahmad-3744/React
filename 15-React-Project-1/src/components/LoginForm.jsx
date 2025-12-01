import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginForm.css'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
function LoginForm () {
    const [formData , setFormData] = useState({email : "", password : ''} )
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

        function ChangeHandler (event) {
            setFormData((previousFormData) => {
                return {
                    ...previousFormData, 
                    [event.target.name] : event.target.value
                }
            })
        }

        function PasswordSpanHandler() {
            setShowPassword(!showPassword)
        }

        function SignInHandler () {
            navigate('/Dashboard')
        }
    return (
        <div className="login-form-container">
            <form action="">
                <label htmlFor="email">Email Address <sup>*</sup></label>
                <input 
                type="email" 
                required 
                name='email'
                value={formData.email}
                placeholder='Enter email address'
                onChange={ChangeHandler}
                  />


                <br />


                <label htmlFor="password">Password <sup>*</sup></label>
                <br />

                <input 
                type= {showPassword ? ("text") : ("password")}
                name='password'
                id='password'
                value={formData.password}
                required
                placeholder='Enter password'
                onChange={ChangeHandler} />
                <span onClick={PasswordSpanHandler}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>

                <Link to ='#' > <p>Forget Password</p></Link>
                <br />
                <button onClick={SignInHandler}>Sign In</button>
            </form>
        </div>
    )
}
export default LoginForm