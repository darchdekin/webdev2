const express = require('express');
const router = express.Router();
const Photo = require('../Models/photo')


// get photos


//get all photos
router.get('/', async (req, res) => {
  try {
    const photos = await Photo.find(); // Retrieve all documents from the 'books' collection
    res.json(photos); // Send the retrieved documents as JSON response
  } catch (err) {
    console.error('Error retrieving photos:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//get one photo by ID
router.get('/:photoId', async (req, res) => {
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

//get photos by event ID
router.get('/event/:eventId', async (req, res) => {
  const eventId =  req.params.eventId
  //const page = req.query.page;
  //const pageSize = req.query.pageSize;
  try {
    const photos = await Photo.find({event: eventId});

    if (!photos) {
      return res.status(404).json({ message: 'Photos not found' });
    }

    res.json(photos)
  } catch (err) {
    console.error('Error retrieving photos:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
})


//add photos

//add many links to google drive photos
router.post('/photos/mass-create', async (req, res) => {
  const { event_id, name, date, links, tags, credit } = req.body;

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
      console.log(i)
      const p = new Photo({
        title: name + "_" + i,
        event: event_id ? event_id : null,
        date: date ? date : null,
        url: directLinks[i],
        tags: tags,
        credit: credit
      })
      console.log(i, p)
      await p.save()
    }
    
    if(e !== undefined) {
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

module.exports = router;