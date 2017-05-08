(function () {
    "use strict";
angular.module('testewmfc').controller('AuthController', function($http,$location) {
		let vmAuthCtrl = this;
		vmAuthCtrl.usuario = {};

		vmAuthCtrl.autenticar = autenticar;

		function autenticar(){
			$http.post('http://localhost:3021/autenticar', 
				{login: vmAuthCtrl.usuario.login, senha: vmAuthCtrl.usuario.senha})
	        .then(function() {
	            $location.path('/produtos');
	        }, function(erro) {
	           vmAuthCtrl.usuario = {};
	           vmAuthCtrl.mensagem = 'Login/Senha incorretos';
	        });
			}

});

}());
