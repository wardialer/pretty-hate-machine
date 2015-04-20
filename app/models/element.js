var mongoose = require('mongoose');

var elementSchema = mongoose.Schema({
    name: {type: String, default: ''},
});   

module.exports = mongoose.model('Element', elementSchema);