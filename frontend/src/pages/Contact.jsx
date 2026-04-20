import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { submitContact } from '../services/api';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContact(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title">GET IN <span>TOUCH</span></h1>
      
      <div className="contact-wrapper">
        <div className="contact-info glass">
          <h3>Gym Information</h3>
          <p>Ready to start? Visit us or drop a message below.</p>
          
          <div className="info-item">
            <MapPin className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>Roorkee City, Uttarakhand, India</p>
            </div>
          </div>
          
          <div className="info-item">
            <Phone className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>
          
          <div className="info-item">
            <Mail className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>info@shivaayfitness.com</p>
            </div>
          </div>

          <div className="info-item">
            <Clock className="info-icon" />
            <div>
              <h4>Hours</h4>
              <p>Mon - Sat: 5:00 AM - 10:00 PM</p>
              <p>Sunday: 6:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form glass">
          <h3>Send a Message</h3>
          {status === 'success' && <div className="alert success">Message sent successfully! We will contact you soon.</div>}
          {status === 'error' && <div className="alert error">Failed to send message. Try again later.</div>}
          
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Submit Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
