var mongoose = require('mongoose');

module.exports = (app) => {
	let service = {};
	let board = mongoose.model('Board');

	service.listar = (req, res, next) =>{
		
		board.find().then((boards) =>{			
			res.json(boards);
		}, (erro) =>{
			res.sendStatus(500);
		})
	} 
	return service;
}