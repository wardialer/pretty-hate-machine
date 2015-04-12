var nerds = require('./nerds');

    module.exports = function(app) {

        // server routes ===========================================================
        app.get('/api/nerds', nerds.nerd);

        // frontend routes =========================================================
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };
