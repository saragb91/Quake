const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    companyName: String,
    role: {
        type: String,
        enum: ['ADMIN', 'COMPANY','CLIENT'],
        default: 'CLIENT',

    },
    booking: {
        type: Schema.Types.ObjectId,
        ref:'Booking'},
    
    activity: {
        type: Schema.Types.ObjectId,
        ref: "Activity"}
    
    
},{ 

    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;