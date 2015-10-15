// BASE SETUP
// =============================================================================

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://mclexr:mongolabMaster@ds037814.mongolab.com:37814/pearls');
app.set('secretKey', "Familia#Amigos@Master!");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 3001; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// REGISTER OUR ROUTES -------------------------------
require('./app/middlewares/headers.middleware')(app, router);
require('./app/routes/auth.routes')(app, router);
require('./app/middlewares/auth.middleware')(app, router);
require('./app/routes/user.routes')(app, router);
require('./app/routes/pearl.routes')(app, router);

app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server running on port ' + port);
