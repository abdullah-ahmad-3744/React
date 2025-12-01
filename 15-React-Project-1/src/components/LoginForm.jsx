import { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
function LoginForm () {
    const [formData , setFormData] = useState({email : "", password : ''} )
    const [showPassword, setShowPassword] = useState(false)

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
                <button>Sign In</button>
            </form>
        </div>
    )
}
export default LoginForm