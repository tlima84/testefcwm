module.exports = (app) => {
	
	let listaElliotService = app.services.listaElliot;
	app.route('/listaElliot').get(listaElliotService.listar);

};