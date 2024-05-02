const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const port = 3000

const photosRouter = require('./routes/photos');
const eventRouter = require('./routes/eventRouter')
const campaignRouter = require('./routes/campaignRouter')

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
app.use('/events', eventRouter)
app.use('/campaigns', campaignRouter)


app.get('/', (req, res) => res.send('YDSA Archive API running.'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
