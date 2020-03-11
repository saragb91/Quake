const express = require('express')
const router = express.Router()

const Activity= require ('../models/Activity.model')

router.get('/getAllActivities', (req, res, next)=>{
    Activity.find()
    .then(allActiv=> res.json(allActiv))
    .catch(err=> next(err))
})

router.get('/getOneActivity/:id', (req, res, next) => {
    Activity.findById(req.params.id)
        .then(theActivity => res.json(theActivity))
        .catch(err => next(err))
})

router.get('/getAnActivity/:sport',(req, res, next) =>{
    Activity.find({activity: req.params.sport})
    .then(specificSport => {res.json(specificSport)})
    .catch(err=> next(err))
} )

router.post('/new', (req,res, next)=> {
    Activity.create(req.body)
    .then(newActivity=>res.json(newActivity))
    .catch(err=> next(err))
})

module.exports= router