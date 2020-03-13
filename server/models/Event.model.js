const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    company: String,
    activity: String,
    price: Number,
    duration: Number,
    difficulty: String,
    description: String,
    province: String,
    date: Date,
    address: String,
    phone: Number,
}, {
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;