var mongoose = require('mongoose');

var elementSchema = mongoose.Schema({
    name: {type: String, default: ''},
    modifiedAt: {type: Date}
});   

module.exports = mongoose.model('Element', elementSchema);