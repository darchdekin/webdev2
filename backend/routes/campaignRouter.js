const express = require('express');
const router = express.Router();
const Campaign = require("../Models/campaign")

/////////// get

// get all
router.get('/', async(req, res) => {
    try {
        const campaigns = await Campaign.find()
        res.status(200).json(campaigns)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//get 1
router.get('/:campaignId', async(req, res) => {
    const id = req.params.campaignId
    try {
        const c = await Campaign.findById(id)
        if (!c) {
            res.status(404).json({ message: 'Campaign not found' });
          }
        res.status(200).json(c)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

////////// add

// add 1
router.post('/', async(req, res) => {
    try{
        const {name, start, end, info} = req.body
        let c = new Campaign({
            name:name,
            start:start,
            end:end,
            info:info
        })

        await c.save()
        res.status(201).json({ message: 'Campaign created successfully', c})
    } catch (error) {
        res.status(500).send(error.message)
    }
})

/////////// edit
//  TODO: edit


module.exports = router