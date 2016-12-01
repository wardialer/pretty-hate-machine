// server.js

// modules =================================================
var express        = require('express');
var mongoose       = require('mongoose');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan         = require('morgan');

// configuration ===========================================
var db = require('./config/database');
var port = process.env.PORT || 80;

mongoose.connect(db.url);
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

// routes ==================================================
require('./app/routes/routes')(app); // configure our routes

// start app ===============================================
app.listen(port);
console.log('The magic happens on port ' + port);
exports = module.exports = app;
