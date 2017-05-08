module.exports = (app) => {
	
	let produtoService = app.services.produto;
	app.route('/produtos').get(produtoService.listar);

};