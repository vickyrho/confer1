// base setup //

var express = require('express');
var app = express();
var port = 8000;
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
var appRoutes = require('./app/routes/api')(router);
var core = require('cors');


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});
app.use(core());
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api',appRoutes);

mongoose.connect('mongodb://wiki:wiki@ds031892.mlab.com:31892/conference',{ useMongoClient: true });

app.use(express.static(__dirname+'/public'));

app.get('*',function(req, res) {
    res.sendFile(path.join(__dirname+'/public/views/index.html'));
});

app.listen(port);

console.log('Magic happens at '+port);
