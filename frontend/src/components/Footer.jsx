import { Activity, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';
import logo from '../assets/shivaay_fitness_logo.png';
import { contactDetails } from '../config/contact';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-wrapper">
            <img src={logo} alt="Shivaay Fitness" className="footer-logo" />
            <div className="logo-text">
              <span>SHIVAAY</span>
              <small>FITNESS</small>
            </div>
          </div>
          <p className="footer-desc">The ultimate strength and conditioning destination in Roorkee. We combine science-based training with elite equipment to help you forge your legacy.</p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Activity size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Activity size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/classes">Programs</a></li>
            <li><a href="/trainers">Our Trainers</a></li>
            <li><a href="/contact">Join Now</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <ul>
            <li><MapPin size={18} className="footer-icon" /> <span>{contactDetails.address}</span></li>
            <li><Phone size={18} className="footer-icon" /> <span>{contactDetails.phoneDisplay}</span></li>
            <li><Mail size={18} className="footer-icon" /> <span>{contactDetails.email}</span></li>
          </ul>
        </div>

        <div className="footer-hours">
          <h3>Opening Hours</h3>
          <ul>
            <li><Clock size={18} className="footer-icon" /> <span>Mon - Sat: 5:00 AM - 10:00 PM</span></li>
            <li><Clock size={18} className="footer-icon" /> <span>Sunday: 7:00 AM - 12:00 PM</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shivaay Fitness. Designed for Performance. Built for Legends.</p>
      </div>
    </footer>
  );
};

export default Footer;
