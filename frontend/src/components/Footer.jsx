import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo">
            <Dumbbell className="logo-icon" />
            <span>SHIVAAY <span>FITNESS</span></span>
          </div>
          <p>Forging strength and resilience in Roorkee City. Join us to transform your life with expert coaching and world-class facilities.</p>
          <div className="social-links">
            <a href="#"><Instagram /></a>
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/classes">Classes</a></li>
            <li><a href="/trainers">Trainers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Roorkee City, Uttarakhand, India</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: info@shivaayfitness.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shivaay Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
