import './Header.css'
import { Link } from 'react-router-dom'
function Header () {
    return (
        <div className="header-container">
            <div className="logo">React Router</div>
            <div className="navigation">
                <ul>
                    <li>  <Link to = '/'> Home</Link></li>
                    <li>  <Link to = '/about'> About</Link></li>
                    <li>  <Link to = '/services'> Services</Link></li>
                    <li>  <Link to = 'support'> Support</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header