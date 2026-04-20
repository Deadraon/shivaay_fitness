import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader-wrapper">
      <div className="logo-box">
        <h1 className="preloader-logo">
          SHIVAAY <span className="preloader-accent">FITNESS</span>
        </h1>
        <div className="loader-container">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
