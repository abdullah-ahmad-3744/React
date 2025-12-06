import './Navbar.css';
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const { cart } = useSelector(state => state);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/">
          <img src="../logo.png" alt="Logo" />
        </NavLink>
      </div>

      {/* Navigation links */}
      <div className="navigation">
        <NavLink to="/"><p>Home</p></NavLink>

        {/* Cart icon */}
        <div className="cart">
          <NavLink to="/cart">
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
