var Nerd = require('../models/nerd');

exports.nerd = function(req, res, next) {
    Nerd.find(function(err, nerds) {
    if (err)
        res.send(err);
    
    res.json(nerds); 
    });
};