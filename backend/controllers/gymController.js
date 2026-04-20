const Trainer = require('../models/Trainer');
const Class = require('../models/Class');
const Contact = require('../models/Contact');
const mongoose = require('mongoose');

// Mock data as fallback if DB isn't connected
const mockTrainers = [
  { _id: '1', name: 'Sagar Bhardwaj', specialty: 'Head Coach & Powerlifting', experience: 10, imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800' },
  { _id: '2', name: 'Anita Desai', specialty: 'Yoga & Mobility', experience: 8, imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800' },
  { _id: '3', name: 'Rahul Sharma', specialty: 'CrossFit & Conditioning', experience: 5, imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' }
];

const mockClasses = [
  { _id: '1', title: 'Powerlifting Basics', description: 'Learn the fundamentals of squat, bench, and deadlift.', instructorName: 'Sagar Bhardwaj', schedule: 'Mon-Wed-Fri 6:00 PM', capacity: 15 },
  { _id: '2', title: 'Morning Vinyasa', description: 'Start your day right with energizing yoga flow.', instructorName: 'Anita Desai', schedule: 'Tue-Thu 7:00 AM', capacity: 20 },
  { _id: '3', title: 'HIIT Burn', description: 'High-intensity interval training to shred fat.', instructorName: 'Rahul Sharma', schedule: 'Mon-Wed-Fri 7:00 PM', capacity: 25 }
];

let mockContacts = [
  { _id: 'm1', name: 'Test User', email: 'test@example.com', phone: '1234567890', message: 'This is a mock message for testing the admin panel!', createdAt: new Date() }
];

// Controllers
exports.getTrainers = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) throw new Error('DB not connected');
    const trainers = await Trainer.find();
    if (trainers.length === 0) return res.json(mockTrainers); // Fallback
    res.json(trainers);
  } catch (error) {
    res.json(mockTrainers); // Fallback to mock if DB fails or is slow
  }
};

exports.addTrainer = async (req, res) => {
  try {
    const trainer = new Trainer(req.body);
    await trainer.save();
    res.status(201).json(trainer);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getClasses = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) throw new Error('DB not connected');
    const classes = await Class.find().populate('instructor');
    if (classes.length === 0) return res.json(mockClasses); // Fallback
    res.json(classes);
  } catch (error) {
    res.json(mockClasses); // Fallback to mock if DB fails or is slow
  }
};

exports.addClass = async (req, res) => {
  try {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.submitContact = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) throw new Error('DB not connected');
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Inquiry submitted successfully!' });
  } catch (error) {
    // If DB fails or is not connected, store in memory and return success instantly
    mockContacts.unshift({ ...req.body, _id: Date.now().toString(), createdAt: new Date() });
    res.status(201).json({ message: 'Inquiry submitted successfully (mock)!' });
  }
};

exports.getContacts = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) throw new Error('DB not connected');
    const contacts = await Contact.find().sort({ createdAt: -1 });
    if (contacts.length === 0) return res.json(mockContacts);
    res.json(contacts);
  } catch (error) {
    res.json(mockContacts);
  }
};
