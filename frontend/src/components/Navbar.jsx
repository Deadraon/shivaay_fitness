import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <Dumbbell className="logo-icon" />
          <span>SHIVAAY <span>FITNESS</span></span>
        </Link>
        
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/classes" className={location.pathname === '/classes' ? 'active-link' : ''} onClick={closeMenu}>Classes</Link>
          </li>
          <li>
            <Link to="/trainers" className={location.pathname === '/trainers' ? 'active-link' : ''} onClick={closeMenu}>Trainers</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''} onClick={closeMenu}>Contact</Link>
          </li>
          <li className="nav-btn-wrapper">
            <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Join Now</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
