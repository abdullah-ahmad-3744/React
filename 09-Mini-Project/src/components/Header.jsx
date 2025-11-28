import './Header.css';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="logo">
        <span className="logo-icon">🌐</span> SkillSphere
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </header>
  );
}

export default Header;
