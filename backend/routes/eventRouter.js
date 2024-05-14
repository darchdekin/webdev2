const express = require('express');
const router = express.Router();
const Event = require('../Models/event')

//////// get events ////////

// get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().populate('campaign').populate('cover_image', 'url');; // Retrieve all documents from the 'books' collection
    res.status(200).json(events); // Send the retrieved documents as JSON response
  } catch (err) {
    console.error('Error retrieving events:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// get one event by id
router.get('/:eventId', async (req, res) => {
  const eventId = req.params.eventId;

  try {
    const event = await Event.findById(eventId).populate('campaign').populate('cover_image', 'url');

    if (!event) {
      res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (err) {
    console.error('Error retrieving event:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router