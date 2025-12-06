import './Navbar.css'
import { NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";

function Navbar () {
    return (
        <div className="navbar">
            <div className="logo">
                <NavLink to='/'><h1>Logo</h1></NavLink>
            </div>
            <div className="navigation">

                    <NavLink to='/'><p>Home</p></NavLink>
                    
                    <div className="cart">
                        <NavLink to='/cart'><IoCart/></NavLink>
                    </div>
            </div>

        </div>
    )
}
export default Navbar;