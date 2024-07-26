import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPhone, FaCalendarAlt, FaUtensils, FaBars, FaTimes } from 'react-icons/fa';
import '../CalendarCustom.css'; 

const NavButtons = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="nav-container">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}><FaHome /> Home</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}><FaPhone />Sign-up</Link></li>
          <li><Link to="/reserve" onClick={toggleMenu}><FaCalendarAlt /> Reserve</Link></li>
          <li><Link to="/menu" onClick={toggleMenu}><FaUtensils /> Menu</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavButtons;
