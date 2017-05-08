let path = require('path');

module.exports  = (app) => {
	
	 app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};