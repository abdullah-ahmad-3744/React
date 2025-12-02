import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginForm.css'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {toast} from 'react-hot-toast'


function LoginForm ({setIsLoggedIn}) {
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

        function SubmitHandler (event) {
            event.preventDefault()
            navigate('/Dashboard')
            setIsLoggedIn(true)
            toast.success("Logged In")
        }
    return (
        <div className="login-form-container">
            <form action="" onSubmit={SubmitHandler}>
                <label htmlFor="email">Email Address <sup>*</sup></label>
                <input 
                type="email"
                id='email'
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