import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, Award, CheckCircle, Phone, Star } from 'lucide-react';
import './Home.css';

// Importing the generated logo (using the path from generation)
import logo from '../assets/shivaay_fitness_logo.png';

const Home = () => {
  return (
    <div className="home animate-fade-up">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">FORGE YOUR <span>LEGACY</span></h1>
          <p className="hero-subtitle">
            Experience the pinnacle of fitness in Roorkee. Led by <strong>Sagar Bhardwaj</strong>, we combine elite strength training with modern science to transform your physique and mindset.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Join the Elite <ArrowRight size={20} className="icon-right" /></Link>
            <Link to="/classes" className="btn">View Programs</Link>
          </div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <div className="stats-bar glass">
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Active Members</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Expert Trainers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Success Rate</span>
        </div>
      </div>

      {/* Features Section */}
      <section className="features page-container">
        <div className="section-header">
          <h2 className="section-title">WHY <span>SHIVAAY?</span></h2>
          <p className="section-desc">We provide more than just equipment; we provide a system for total transformation.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card glass">
            <Activity size={40} className="feature-icon" />
            <h3>State-of-the-Art Gear</h3>
            <p>Train with imported, competition-grade equipment designed for maximum muscle engagement.</p>
          </div>
          <div className="feature-card glass">
            <Users size={40} className="feature-icon" />
            <h3>Personalized Coaching</h3>
            <p>No cookie-cutter plans. Get a custom roadmap designed by Sagar Bhardwaj himself.</p>
          </div>
          <div className="feature-card glass">
            <Award size={40} className="feature-icon" />
            <h3>Premium Atmosphere</h3>
            <p>A high-energy, focused environment where distractions are eliminated and results are prioritized.</p>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="transformations page-container">
        <h2 className="section-title">REAL <span>TRANSFORMATIONS</span></h2>
        <div className="transformation-grid">
          <div className="transformation-card glass">
            <div className="transformation-img">
              {/* Placeholder for transformation image */}
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800" alt="Transformation 1" />
            </div>
            <div className="transformation-info">
              <h4>Rahul Sharma</h4>
              <p>Lost 15kg in 3 months</p>
              <div className="transformation-badge">Weight Loss</div>
            </div>
          </div>
          <div className="transformation-card glass">
            <div className="transformation-img">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" alt="Transformation 2" />
            </div>
            <div className="transformation-info">
              <h4>Amit Verma</h4>
              <p>Gained 8kg Lean Muscle</p>
              <div className="transformation-badge">Muscle Gain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="trainers-highlight page-container">
        <div className="trainer-showcase glass">
          <div className="trainer-img-large">
            <img src="https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=800" alt="Sagar Bhardwaj" />
          </div>
          <div className="trainer-details">
            <span className="trainer-tag">Founder & Head Coach</span>
            <h3>Sagar Bhardwaj</h3>
            <p>"Fitness is 20% training and 80% discipline. At Shivaay, we build both. My mission is to help 10,000 people in Roorkee achieve their dream physique through scientifically backed training."</p>
            <div className="trainer-creds">
              <span><CheckCircle size={16} /> Certified Nutritionist</span>
              <span><CheckCircle size={16} /> 10+ Years Experience</span>
              <span><CheckCircle size={16} /> Competition Prep Expert</span>
            </div>
            <Link to="/contact" className="btn btn-primary">Train With Sagar</Link>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="memberships">
        <h2 className="section-title">MEMBERSHIP <span>LEVELS</span></h2>
        <div className="membership-grid page-container">
          <div className="price-card glass">
            <h3>ELITE ACCESS</h3>
            <div className="price">₹1,999<span>/mo</span></div>
            <ul>
              <li><CheckCircle size={18} /> Full Gym Access</li>
              <li><CheckCircle size={18} /> Locker Room & Shower</li>
              <li><CheckCircle size={18} /> Basic Workout Plan</li>
              <li><CheckCircle size={18} /> Free Body Assessment</li>
            </ul>
            <Link to="/contact" className="btn">Join Elite</Link>
          </div>
          <div className="price-card premium glass">
            <div className="popular-badge">MOST POPULAR</div>
            <h3>LEGACY PRO</h3>
            <div className="price">₹3,499<span>/mo</span></div>
            <ul>
              <li><CheckCircle size={18} /> Everything in Elite</li>
              <li><CheckCircle size={18} /> 2 PT Sessions / Month</li>
              <li><CheckCircle size={18} /> Custom Nutrition Plan</li>
              <li><CheckCircle size={18} /> Supplement Guidance</li>
              <li><CheckCircle size={18} /> Advanced Progress Tracking</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Forge My Legacy</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials page-container">
        <h2 className="section-title">THE <span>VIBE</span></h2>
        <div className="testimonial-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="testimonial-card glass">
              <div className="stars">
                <Star size={16} fill="var(--accent)" color="var(--accent)" />
                <Star size={16} fill="var(--accent)" color="var(--accent)" />
                <Star size={16} fill="var(--accent)" color="var(--accent)" />
                <Star size={16} fill="var(--accent)" color="var(--accent)" />
                <Star size={16} fill="var(--accent)" color="var(--accent)" />
              </div>
              <p>"The best gym in Roorkee. Sagar sir's knowledge is unparalleled. The environment is so motivating that you can't help but give your 100%."</p>
              <div className="user-info">
                <strong>Aniket P.</strong>
                <span>Member since 2023</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="sticky-cta">
        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" title="Chat on WhatsApp">
          <Activity color="#fff" size={30} />
        </a>
        <a href="tel:+91XXXXXXXXXX" className="btn btn-primary call-btn" style={{borderRadius: '50%', width: '60px', height: '60px', padding: '0'}}>
          <Phone size={30} />
        </a>
      </div>
    </div>
  );
};

export default Home;
