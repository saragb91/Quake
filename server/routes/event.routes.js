const express = require('express')
const router = express.Router()
//MODELS
const Event = require('../models/Event.model')


router.get('/getAllEvents', (req, res, next) => {
    Event.find()
        .then(allEvents => res.json(allEvents))
        .catch(err => next(err))
})

router.post('/new', (req, res, next) => {
    Event.create(req.body)
        .then(newEvent => res.json(newEvent))
        .catch(err => next(err))
})
module.exports = router