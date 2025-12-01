import { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import './SignUpForm.css'
import { useNavigate } from 'react-router-dom'

function SignUpForm () {
    const [singUpFormData, setSignUpFormData] = useState({
        firstName: '', lastName : '', email : '', createPassword : '', confirmPassword : ''
    })
    const [showCreatePassword, setShowCreatePassword] = useState(false)
    const navigate = useNavigate()


    function ChangeHandler (event) {
        setSignUpFormData( (previousFormData)=> {
            return {
                ...previousFormData,
                [event.target.name] : event.target.value
            }
        })
    }

    function PasswordSpanHandler() {
        setShowCreatePassword(!showCreatePassword)
    }
    return (
        <div className="sign-up-form-container">
            <div className="buttons">
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form action="">
                <div className="name">
                <label htmlFor=""> <p>First Name <sup>*</sup></p>
                    <input 
                    type="text"
                    name='firstName'
                    value={singUpFormData.firstName}
                    required
                    placeholder='Enter First Name'
                    onChange={ChangeHandler}
                       />
                </label>
                <label htmlFor="">
                    <p>Last Name <sup>*</sup></p>
                    <input 
                    type="text"
                    name = 'lastName'
                    required
                    placeholder='Enter Last Name'
                    value={singUpFormData.lastName}
                    onChange={ChangeHandler} 
                    />
                </label>
            </div>

            <div className="email-address">
                <label htmlFor="">
                    <p>Email Address <sup>*</sup></p>
                    <input 
                    type="email"
                    name='email'
                    required
                    value={singUpFormData.email}
                    onChange={ChangeHandler}
                    placeholder='Enter email address' 
                    />
                </label>
            </div>

            <div className="password">
                <div className="create-password">
                    <label htmlFor="">
                        <p>Create Password <sup>*</sup></p>
                        <input 
                        type={showCreatePassword ? ('text') : ('password')}
                        name='createPassword'
                        required 
                        value={singUpFormData.createPassword}
                        placeholder='Create Password'
                        onChange={ChangeHandler}/>
                    </label>
                    <span onClick={PasswordSpanHandler}>
                        {showCreatePassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </div>
                <div className="confirm-password">
                    <label htmlFor="">
                        <p>Confirm Password <sup>*</sup></p>
                    </label>
                    <input 
                        type={showCreatePassword ? ('text') : ('password')}
                        name='confirmPassword'
                        value={singUpFormData.confirmPassword}
                        required
                        placeholder='Confirm Password'
                        onChange={ChangeHandler}
                         />
                    <span onClick={PasswordSpanHandler}>
                        {showCreatePassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                    </span>
                </div>
            </div>

            <button>Create Account</button>
            </form>
        </div>
    )
}
export default SignUpForm