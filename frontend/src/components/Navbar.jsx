import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, LogOut } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/shivaay_fitness_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const isLoggedIn = localStorage.getItem('isAdmin') === 'true';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleAdminLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminSecret');
    window.dispatchEvent(new Event('adminLogout'));
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo-wrapper" onClick={closeMenu}>
          <img src={logo} alt="Shivaay Fitness" className="nav-logo" />
          <div className="logo-text">
            <span>SHIVAAY</span>
            <small>FITNESS</small>
          </div>
        </Link>
        
        {isAdmin && isLoggedIn && (
          <button onClick={handleAdminLogout} className="btn admin-logout-btn">
            <LogOut size={16} style={{marginRight: '8px'}} /> Logout
          </button>
        )}

        {!isAdmin && (
          <>
            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={closeMenu}>Home</Link>
              </li>
              <li>
                <Link to="/classes" className={location.pathname === '/classes' ? 'active-link' : ''} onClick={closeMenu}>Programs</Link>
              </li>
              <li>
                <Link to="/trainers" className={location.pathname === '/trainers' ? 'active-link' : ''} onClick={closeMenu}>Trainers</Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''} onClick={closeMenu}>Contact</Link>
              </li>
              <li className="nav-btn-wrapper">
                <Link to="/contact" className="btn btn-primary nav-cta" onClick={closeMenu}>
                  Join Now <ArrowRight size={16} style={{marginLeft: '8px'}} />
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
