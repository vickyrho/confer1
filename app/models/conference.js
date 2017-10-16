var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var bcrypt = require('bcrypt-nodejs');



var conferenceSchema = new Schema({


    name: { type: String, required: true },
    venue: { type: String, required:true },
    date : { type: String, required: true},
    topic : {type: String, required: true}
});


module.exports = mongoose.model('Conference',conferenceSchema);