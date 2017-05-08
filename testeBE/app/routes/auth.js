module.exports = function(app) {

    var authService = app.services.auth;
    app.post('/autenticar', authService.autenticar);
    //proteção de todas as rotas menos /autenticar
    app.use('/produtos', authService.verificarToken);
};