var Element = require('../models/element');
var mongoose = require('mongoose');

exports.getElement = function(req, res, next) {
    Element.find(function(err, elements) {
    if (err)
        res.send(500, err);
    
    res.json(elements); 
    });
};

exports.addElement = function(req, res, next) {
    var element = new Element(req.body);
    element.save(function(err, element) {
        if (err)
            res.send(500, err);

        res.json(element);
    });
};

exports.deleteElement = function(req, res, next) {
    Element.remove({_id: req.params.id}, function(err, element) {
        if (err)
            res.send(500, err);

        res.json('Successfully removed');
    });
};