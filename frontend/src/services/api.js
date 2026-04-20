import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getTrainers = async () => {
  const res = await axios.get(`${API_URL}/trainers`);
  return res.data;
};

export const getClasses = async () => {
  const res = await axios.get(`${API_URL}/classes`);
  return res.data;
};

export const submitContact = async (data) => {
  const res = await axios.post(`${API_URL}/contact`, data);
  return res.data;
};
