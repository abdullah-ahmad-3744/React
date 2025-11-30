import './Header.css'
import { Link, NavLink } from 'react-router-dom'
function Header () {
    return (
        <div className="header-container">
            <div className="logo">Route Flow</div>


            <div className="navigation">
                <ul>
                    <li>  <NavLink to = '/'> Home</NavLink></li>
                    <li>  <NavLink to = '/about'> About</NavLink></li>
                    <li>  <NavLink to = '/services'> Services</NavLink></li>
                    <li>  <NavLink to = 'support'> Support</NavLink></li>
                </ul>
            </div>

            
        </div>
    )
}
export default Header