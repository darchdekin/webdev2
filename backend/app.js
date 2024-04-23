const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3000

const photosRouter = require('./routes/photos');

const uri = "mongodb+srv://darchdekin02:DpTeZx2NFa143bz8@final.sotpyed.mongodb.net/ydsa?retryWrites=true&w=majority&appName=Final";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

mongoose.connect(uri, clientOptions)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


app.use('/photos', photosRouter);

const Event = require('./Models/event')
app.get('/events', async (req, res) => {
  try {
    const events = await Event.find(); // Retrieve all documents from the 'books' collection
    res.json(events); // Send the retrieved documents as JSON response
  } catch (err) {
    console.error('Error retrieving events:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/events/:eventId', async (req, res) => {
  const eventId = req.params.eventId;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (err) {
    console.error('Error retrieving event:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
