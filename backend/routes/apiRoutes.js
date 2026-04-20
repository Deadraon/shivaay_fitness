const express = require('express');
const router = express.Router();
const { getTrainers, addTrainer, getClasses, addClass, submitContact, getContacts } = require('../controllers/gymController');

// Trainer Routes
router.get('/trainers', getTrainers);
router.post('/trainers', addTrainer);

// Class Routes
router.get('/classes', getClasses);
router.post('/classes', addClass);

// Contact Routes
router.post('/contact', submitContact);
router.get('/contact', getContacts);

module.exports = router;
