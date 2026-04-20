import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, Award } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">AWAKEN YOUR <span>INNER BEAST</span></h1>
          <p className="hero-subtitle">The ultimate fitness destination in Roorkee City. State-of-the-art equipment, elite coaching by Sagar Bhardwaj, and a community that pushes you to your limits.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Start Your Journey <ArrowRight size={20} className="icon-right" /></Link>
            <Link to="/classes" className="btn">Explore Classes</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features page-container">
        <div className="feature-grid">
          <div className="feature-card glass">
            <Activity size={40} className="feature-icon" />
            <h3>Modern Equipment</h3>
            <p>Train with the best. Our gym is fully stocked with premium free weights, machines, and cardio gear.</p>
          </div>
          <div className="feature-card glass">
            <Users size={40} className="feature-icon" />
            <h3>Expert Coaching</h3>
            <p>Led by head coach Sagar Bhardwaj, our trainers provide personalized guidance to hit your goals.</p>
          </div>
          <div className="feature-card glass">
            <Award size={40} className="feature-icon" />
            <h3>Elite Environment</h3>
            <p>A supportive, high-energy community dedicated to mutual growth and relentless progress.</p>
          </div>
        </div>
      </section>

      {/* Membership Teaser */}
      <section className="memberships">
        <h2 className="section-title">CHOOSE YOUR <span>PLAN</span></h2>
        <div className="membership-grid page-container">
          <div className="price-card glass">
            <h3>BASIC</h3>
            <div className="price">₹1,499<span>/mo</span></div>
            <ul>
              <li>Access to gym floor</li>
              <li>Locker room access</li>
              <li>Free consultation</li>
            </ul>
            <Link to="/contact" className="btn">Join Now</Link>
          </div>
          <div className="price-card premium glass">
            <div className="badge">POPULAR</div>
            <h3>PRO</h3>
            <div className="price">₹2,499<span>/mo</span></div>
            <ul>
              <li>All Basic features</li>
              <li>Unlimited Group Classes</li>
              <li>1 PT Session/month</li>
              <li>Diet Plan</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Join Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
