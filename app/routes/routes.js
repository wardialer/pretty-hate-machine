var elements = require('./elements');

module.exports = function(app) {
    // server routes ===========================================================
    app.get('/api/elements', elements.getElement);
    app.post('/api/elements', elements.addElement);
    app.delete('/api/elements/:id', elements.deleteElement);

    // frontend routes =========================================================
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html');
    });
};
