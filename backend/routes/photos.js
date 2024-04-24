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
    const photo = await Photo.findById(photoId).populate('event');

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

//add one photo
router.post('/', async (req, res) => {
  const { event_id, name, date, link, tags, credit, is_drive, caption } = req.body;

  try {
    let p = new Photo({
      date: date ? date : null,
      event: event_id ? event_id : null,
      tags: tags,
      credit: credit,
      caption: caption
    })

    p.url = is_drive ? await getDirectLink(link) : link

    if(event_id) {
      const e = await Event.findById(event_id)
      if(e.photo_c) {
        p.title = name + "_" + e.photo_c
        e.photo_c = e.photo_c + 1
        await e.save
      } else p.title = name
    } else p.title = name

    await p.save()
    res.status(201).json({ message: 'Image created successfully', p });
  } catch (error) {
    res.status(500).json({ message: 'Error processing links', error });
  }
})

//add many links to google drive photos
router.post('/mass-create', async (req, res) => {
  const { event_id, name, date, links, tags, credit, is_drive } = req.body;

  let i = 0;
  let e
  //find starting index for counter
  if(event_id) {
    e = await Event.findById(event_id)
    if(e.photo_c) {i = e.photo_c}
  }

  try {
    console.log(links)
    const directLinks = is_drive ? await Promise.all(links.map(getDirectLink)) : links
    
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
  // Extract file ID from Google Drive link
  let splitLink = link.split('\/')
  let fileId = splitLink[splitLink.length - 2]
  // Construct direct link
  const directLink = `https://lh3.googleusercontent.com/d/${fileId}`;
  return directLink;
}

// edit photos

//edit 1 photo
router.post('/:photoId', async (req, res) => {
  const { event_id, name, date, tags, credit, caption } = req.body;

  try {
    let p = await Photo.findById(photoId)
    p.title = name
    p.date = date
    p.tags = tags
    p.credit = credit
    p.caption = caption
    p.event = event_id
    await p.save
    res.status(201).json({ message: 'Image edited successfully', p })
  } catch {
    res.status(500).json({ message: 'Error editing image', error });
  }
})


module.exports = router;