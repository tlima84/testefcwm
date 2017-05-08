const express = require('express');
const preConfigExpress = require('./config/express');
require('./config/database')('mongodb://localhost:27017/teste');

preConfigExpress.listen(3021, function(){

});
