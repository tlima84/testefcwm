const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const consign = require('consign');

const expressApp = express();

expressApp.use(cors());

expressApp.use(bodyParser.json());
expressApp.use(express.static('public'));

/*
//app que efetua os requires de 
//modulos de maneira automática pasta por pasta
*/
consign({cwd: 'app'})
    .include('models')
 	.then('services')
 	.then('routes/auth.js') // garante que o auth vai ser o primeiro modulo a ser carregado dessa pasta
 	.then('routes')
 	.into(expressApp);

module.exports = expressApp;
