const express = require('express')
const router = express.Router()

const Sport = require('../models/Sport.model')

router.get('/getAllSports', (req, res, next) => {
    Sport.find()
        .then(allSports => res.json(allSports))
        .catch(err => next(err))
})





module.exports = router