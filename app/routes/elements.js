var Element = require('../models/element');
var mongoose = require('mongoose');

exports.getElements = function(req, res, next) {
    var query = {};
    var id = req.params.id;

    if (mongoose.Types.ObjectId.isValid(id)) {
        query._id = id;
    }

    Element.find(query, function(err, elements) {
    if (err)
        res.send(500, err);

    res.json(elements);
    });
};

exports.saveElement = function(req, res, next) {
    var element = new Element(req.body);
    Element.findOneAndUpdate({_id : element._id}, element, {upsert: true, new: true}, function(err, element) {
        if (err)
            res.send(500, err);

        res.json(element);
    });
};

exports.deleteElement = function(req, res, next) {
    Element.remove({_id: req.params.id}, function(err, status) {
        if (err)
            res.send(500, err);

        res.json('Successfully removed');
    });
};
