const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    activityId: {
        type: Schema.Types.ObjectId,
        ref: "Activity"
    },
    people: Number,
    date: String,
},{
        timestamps: true
    });

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;

