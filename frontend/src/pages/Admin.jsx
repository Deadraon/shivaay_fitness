import React, { useEffect, useState } from 'react';
import { getContacts } from '../services/api';
import './Admin.css';

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAdmin') === 'true');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const data = await getContacts(localStorage.getItem('adminSecret'));
      setContacts(data);
      setError('');
    } catch (error) {
      console.error('Error fetching contacts', error);
      setError('Unauthorized access. Please login again.');
      if (error.response?.status === 401) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchContacts();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'shivaay123') { // Simple password for demo
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('adminSecret', 'shivaay123');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminSecret');
    setIsAuthenticated(false);
    setContacts([]);
  };

  if (!isAuthenticated) {
    return (
      <div className="page-container animate-fade-in">
        <h1 className="section-title">ADMIN <span>LOGIN</span></h1>
        <div className="contact-form glass" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h3>Password Required</h3>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              placeholder="Enter Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            {error && <p style={{ color: '#e74c3c', marginBottom: '15px' }}>{error}</p>}
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 className="section-title" style={{ margin: 0 }}>ADMIN <span>DASHBOARD</span></h1>
        <button onClick={handleLogout} className="btn">Logout</button>
      </div>
      <p className="page-subtitle">Manage inquiries and gym details.</p>

      {loading ? (
        <div className="loader">Loading inquiries...</div>
      ) : (
        <div className="admin-content glass">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Contact Inquiries</h3>
            <button onClick={fetchContacts} className="btn" style={{ fontSize: '0.8rem', padding: '8px 15px' }}>Refresh</button>
          </div>
          {error && <p style={{ color: '#e74c3c', marginBottom: '20px' }}>{error}</p>}
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {contacts.length > 0 ? (
                  contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.phone || 'N/A'}</td>
                      <td>{contact.message}</td>
                      <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center' }}>No inquiries found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
