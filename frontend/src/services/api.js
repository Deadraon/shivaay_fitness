import axios from 'axios';

const API_URL = 'https://shivaayfitness-production.up.railway.app/api';

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

export const getContacts = async (secret) => {
  const res = await axios.get(`${API_URL}/contact`, {
    headers: { 'x-admin-secret': secret }
  });
  return res.data;
};
