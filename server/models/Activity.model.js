const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    company: String,
    activity: String,
    price: Number,
    duration: Number,
    difficulty: String,
    description: String,
    image: String,
    province: String,
    date: Date,
    address: String,
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    peopleBooking:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    map: {
        lat: Number,
        leng: Number,
        name: String,
    },

}, {
    timestamps: true
});

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;