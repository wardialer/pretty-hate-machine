var Nerd = require('../models/nerd');

exports.getNerd = function(req, res, next) {
    Nerd.find(function(err, nerds) {
    if (err)
        res.send(500, err);
    
    res.json(nerds); 
    });
};

exports.addNerd = function(req, res, next) {
    var nerd = new Nerd(req.body);
    nerd.save(function(err, nerd) {
        if (err)
            res.send(500, err);

        res.json(nerd);
    });
};

exports.deleteNerd = function(req, res, next) {
    Nerd.remove({_id: req.params.id}, function(err, nerd) {
        if (err)
            res.send(500, err);

        res.json('Successfully removed');
    });
};