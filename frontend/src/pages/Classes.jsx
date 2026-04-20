import React, { useEffect, useState } from 'react';
import { getClasses } from '../services/api';
import './Classes.css';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await getClasses();
        setClasses(data);
      } catch (error) {
        console.error('Error fetching classes', error);
      } finally {
        setLoading(false);
      }
    };
    fetchClasses();
  }, []);

  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title">OUR <span>CLASSES</span></h1>
      <p className="page-subtitle">Push your limits with our diverse range of group sessions designed for all fitness levels.</p>

      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="class-grid">
          {classes.map((cls) => (
            <div key={cls._id} className="class-card glass">
              <h3>{cls.title}</h3>
              <p className="instructor">Instructor: <span>{cls.instructor?.name || cls.instructorName}</span></p>
              <p className="desc">{cls.description}</p>
              <div className="schedule">
                <strong>Schedule:</strong> {cls.schedule}
              </div>
              <button className="btn btn-primary" onClick={() => window.location.href='/contact'}>Book Slot</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Classes;
