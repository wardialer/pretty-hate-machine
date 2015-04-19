var mongoose = require('mongoose');

var elementSchema = mongoose.Schema({
    name: {type: String, default: ''},
    modifiedAt: {type: Date}
});   

elementSchema.pre('save', function(next){
    this.modifiedAt = new Date();
    next();
});

module.exports = mongoose.model('Element', elementSchema);