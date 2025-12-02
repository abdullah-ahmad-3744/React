import { NavLink, useNavigate } from "react-router-dom"
import logo from '../assets/logo.svg'
import './Header.css'
import toast from "react-hot-toast"

function Header(props) {
    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn
    const navigate = useNavigate()
    function LogOutHandler () {
        setIsLoggedIn(!isLoggedIn)
        toast.success("Logged Out")
    }

    function LoginHandler() {
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <div className="header-container">
            <div className="logo">
                <NavLink to='/'>
                    <img src={logo} alt=""  loading="lazy" />
                </NavLink>
            </div>
            <div className="navigation-menu">
                <ul>
                    <li> <NavLink to='/'>  Home</NavLink> </li >
                    <li> <NavLink to='#'>  About</NavLink> </li>
                    <li> <NavLink to='#'>  Contact</NavLink></li>
                </ul>
                <div className="buttons">

                    {isLoggedIn ? 
                    (<><button><NavLink to='/logout' onClick={LogOutHandler}>Logout</NavLink></button>
                    <button><NavLink to='/dashboard'>Dshboard</NavLink></button></>) :
                    (<> <button><NavLink to='/signUp'>SignUp</NavLink></button>
                    <button><NavLink to='/login' onClick={LoginHandler}>Login</NavLink></button></>)

                    }
                </div>
            </div>
        </div>
    )
}
export default Header