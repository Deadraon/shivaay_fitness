import React, { useEffect, useState } from 'react';
import { getTrainers } from '../services/api';
import './Trainers.css';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const data = await getTrainers();
        setTrainers(data);
      } catch (error) {
        console.error('Error fetching trainers', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrainers();
  }, []);

  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title">MEET THE <span>TEAM</span></h1>
      <p className="page-subtitle">Learn from the best. Our elite trainers are dedicated to helping you achieve your ultimate physique and performance.</p>

      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="trainer-grid">
          {trainers.map((trainer) => (
            <div key={trainer._id} className="trainer-card">
              <div className="trainer-img-wrapper">
                <img src={trainer.imageUrl} alt={trainer.name} />
                <div className="trainer-overlay glass">
                  <h3>{trainer.name}</h3>
                  <p className="spec">{trainer.specialty}</p>
                  <p className="exp">{trainer.experience} Years Exp.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trainers;
