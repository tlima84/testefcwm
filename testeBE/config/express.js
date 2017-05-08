let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors')

let expressApp = express();

expressApp.use(cors());

expressApp.use(bodyParser.json());
expressApp.use(express.static('public'))
/*
//app que efetua os requires de 
//modulos de maneira automática pasta por pasta
*/
let consign = require('consign');

consign({cwd: 'app'})
    .include('models')
 	.then('services')
 	.then('routes/auth.js') // garante que o auth vai ser o primeiro modulo a ser carregado dessa pasta
 	.then('routes')
 	.into(expressApp);

module.exports = expressApp;