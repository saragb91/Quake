const express = require('express')
const router = express.Router()

const Booking = require('../models/Booking.model')
const Activity = require('../models/Activity.model')
const User = require('../models/User.model')



router.get('/getAllBooking', (req, res, next) => {
    Booking.find()
        .then(allBooking => res.json(allBooking))
        .catch(err => next(err))
})

router.post('/newBooking', (req, res, next) => {
    console.log(req.body, "el body")
    Booking.create(req.body)
        .then(createBooking => res.json(createBooking))
        .catch(err => next(err))

    Activity.findByIdAndUpdate(req.body.activityId, { $push: { peopleBooking: req.body.userId } }, { new: true })
        .populate('peopleBooking')
        .then(updateBooking => res.json(updateBooking))
        .catch(err => next(err))
        //es posible que el error venga dado porque no se pueden enviar dos json
        //la solucion seria meter el activity.findby... dentro del then del Bookin.create..

})

router.get('/getOwnBooking/:userId', (req, res, next) => {
    Booking.find({ userId: req.params.userId })
        .populate("activityId")
        .then(ownBook => res.json(ownBook))
        .catch(err => next(err))
})

router.get('/getCompanyBooking/:activities', (req, res, next) => {
    Activity.find({ company: req.params.activities })
        .then(bookActivity => res.json(bookActivity))
        .catch(err => next(err))
})


module.exports = router 