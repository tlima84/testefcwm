let express = require('express');
let route = require('../app/routes/route');

let expressApp = express();

expressApp.use(express.static('./public'));
//expressApp.use(express.static('./node_modules'));

route(expressApp);

module.exports = expressApp;





