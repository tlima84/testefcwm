let mongoose = require('mongoose');

module.exports = (app) => {
	let service = {};
	let produtoModel = mongoose.model('Produto');

	service.listar = (req, res, next) =>{
		
		produtoModel.find().then((produtos) =>{			
			res.json(produtos);
		}, (erro) =>{
			res.sendStatus(500);
		})
	} 
	return service;
}
