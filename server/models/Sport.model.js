const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema = new Schema({
    sport: String,
    image: String,
    groupSport: Array,

}, {
    timestamps: true
});

const Sport = mongoose.model('Sport', sportSchema);
module.exports = Sport;