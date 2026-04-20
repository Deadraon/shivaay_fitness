import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
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
    <div className="page-container animate-fade-up">
      <div className="contact-header">
        <h1 className="section-title">START YOUR <span>TRANSFORMATION</span></h1>
        <p className="page-subtitle">Don't wait for "someday." Join the elite fitness community in Roorkee today and forge the best version of yourself.</p>
      </div>
      
      <div className="contact-wrapper">
        <div className="contact-benefits">
          <div className="benefit-card glass">
            <ShieldCheck className="benefit-icon" />
            <div>
              <h4>Elite Environment</h4>
              <p>Train in a space designed for focus and results, away from the crowds.</p>
            </div>
          </div>
          <div className="benefit-card glass">
            <Zap className="benefit-icon" />
            <div>
              <h4>Expert Guidance</h4>
              <p>Direct access to Sagar Bhardwaj's 10+ years of coaching expertise.</p>
            </div>
          </div>
          <div className="benefit-card glass">
            <TrendingUp className="benefit-icon" />
            <div>
              <h4>Proven Results</h4>
              <p>Join the 500+ members who have already transformed their lives.</p>
            </div>
          </div>

          <div className="urgency-badge">
            <div className="dot"></div>
            <span>Only 5 spots left for this month's Personal Training intake!</span>
          </div>
        </div>

        <div className="contact-form glass">
          <h3>Apply for Membership</h3>
          <p style={{marginBottom: '1.5rem', color: 'var(--text-muted)'}}>Fill out the form below and our team will get back to you within 24 hours.</p>
          
          {status === 'success' && <div className="alert success">Application submitted! We'll call you shortly.</div>}
          {status === 'error' && <div className="alert error">Failed to submit. Please call us directly.</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Rahul Sharma" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="rahul@example.com" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Phone Number (WhatsApp preferred)</label>
              <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Primary Fitness Goal</label>
              <textarea name="message" rows="3" placeholder="I want to lose 10kg and build muscle..." value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{width: '100%', marginTop: '1rem'}}>
              Secure My Spot
            </button>
          </form>
        </div>
      </div>

      <div className="contact-info-grid page-container">
        <div className="info-box glass">
          <MapPin size={24} className="info-icon" />
          <h4>Find Us</h4>
          <p>Civil Lines, Near Main Market, Roorkee, Uttarakhand</p>
        </div>
        <div className="info-box glass">
          <Phone size={24} className="info-icon" />
          <h4>Call Us</h4>
          <p>+91 98765 43210</p>
        </div>
        <div className="info-box glass">
          <Mail size={24} className="info-icon" />
          <h4>Email</h4>
          <p>join@shivaayfitness.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
