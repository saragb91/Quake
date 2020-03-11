require('dotenv').config();


const express = require('express')
const app = express();

require('./configs/mongoose.config')
require('./configs/middleware.config')(app)
require('./configs/locals.config')(app)
require('./configs/session.config')(app)




app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/activities', require('./routes/activities.routes'))
app.use('/api/roles', require('./routes/roles.routes'))
app.use('/api/sports', require('./routes/sports.routes'))
app.use('/api/booking', require('./routes/booking.routes'))


app.use((req, res) => { res.sendFile(__dirname + "/public/index.html"); });

module.exports = app;
