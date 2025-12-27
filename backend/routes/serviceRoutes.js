const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Add a service
router.post('/', async (req, res) => {
  try {
    const newService = new Service(req.body);
    await newService.save();
    res.status(201).json({ message: 'Service added', data: newService });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
