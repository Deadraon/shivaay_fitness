import React from 'react';
import './Preloader.css';
import logo from '../assets/shivaay_fitness_logo.png';

const Preloader = () => {
  return (
    <div className="preloader-wrapper">
      <div className="preloader-content">
        <img src={logo} alt="Shivaay Fitness" className="preloader-logo-img" />
        <div className="preloader-text">
          <span>SHIVAAY</span>
          <small>FITNESS</small>
        </div>
        <div className="loader-line-container">
          <div className="loader-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
