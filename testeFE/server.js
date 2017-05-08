const http = require('http');
const app = require('./config/express');

http.createServer(app).listen(3003, function() {
    
});

