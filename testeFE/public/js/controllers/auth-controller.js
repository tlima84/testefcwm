angular.module('testewmfc').controller('AuthController', function(TesteBEService, $http,$location) {
		let vmAuthCtrl = this;
		vmAuthCtrl.usuario = {};

		vmAuthCtrl.autenticar = autenticar;

		function autenticar(){

			//TesteBEService.auth({login: vmAuthCtrl.usuario.login, senha: vmAuthCtrl.usuario.senha});
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

