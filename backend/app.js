const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3000

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


const Photo = require('./Models/photo')

app.get('/photos', async (req, res) => {
  try {
    const photos = await Photo.find(); // Retrieve all documents from the 'books' collection
    res.json(photos); // Send the retrieved documents as JSON response
  } catch (err) {
    console.error('Error retrieving photos:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/photos/:photoId', async (req, res) => {
  const photoId = req.params.photoId
  try {
    const photo = await Photo.findById(photoId);

    if (!photo) {
      return res.status(404).json({ message: 'Photo not found' });
    }

    res.json(photo);
  } catch (err) {
    console.error('Error retrieving photo:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
})

app.post('/photos/mass-create', async (req, res) => {
  const { event_id, name, date, links } = req.body;

  let i = 0;
  let e
  //find starting index for counter
  if(event_id) {
    e = await Event.findById(event_id)
    if(e.photo_c) {i = e.photo_c}
  }

  try {
    console.log(links)
    const directLinks = await Promise.all(links.map(getDirectLink));
    // Assuming `Image` is your Mongoose model for storing image documents
    for(; i < directLinks.length; i++) {
      const p = new Photo({
        title: name + "_" + i,
        event: event_id,
        date: date,
        url: directLinks[i]
      })
      console.log(i, p)
      await p.save()
    }
    
    if(e) {
      e.photo_c = i + 1
      await e.save()
    }
    res.status(201).json({ message: 'Images created successfully', directLinks });
  } catch (error) {
    res.status(500).json({ message: 'Error processing links', error });
  }
});

async function getDirectLink(link) {
  // Extract file ID from Google Drive link\
  let splitLink = link.split('\/')
  let fileId = splitLink[splitLink.length - 2]
  // Construct direct link
  const directLink = `https://lh3.googleusercontent.com/d/${fileId}`;
  return directLink;
}

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
