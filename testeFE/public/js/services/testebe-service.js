(function () {
    "use strict";

angular.module('testewmfc').factory('TesteBEService', testeBEService);


	function testeBEService($resource,$q, $location) {
		let resource = $resource('', {}, {
			auth: {
				method: 'POST',
				url: 'http://localhost:3021/autenticar',
				cache : false
			},
			listarProdutos:{
				method: 'GET',
				url: 'http://localhost:3021/produtos',
				cache : false,
				isArray: true 
			},
			obterImagem:{
				method: 'GET',
				url: 'http://localhost:3021/img/:idimg',
				cache : false,
				params:{idimg:'@idimg'}
			}

		});
		return {
			auth : auth,
			listarProdutos : listarProdutos,
			obterImagem : obterImagem
		};	

	function auth(usuario){
		let defer = $q.defer();
		resource.auth(usuario, retorno => {
			$location.path('/produtos');
		}, fail => {
			console.log(fail);
			defer.reject({mensagem: "Usuário ou Senha estão inválidos"});
		});
		return defer.promise;

	}
	function listarProdutos(){
		let defer = $q.defer();
		resource.listarProdutos(retorno =>{
			defer.resolve(retorno);
		}, fail => {
			console.log(fail);
			defer.reject({mensagem: "Falha ao obter lista de produtos"});
		});
		return defer.promise;
	}
	function obterImagem(idimg){
		let defer = $q.defer();
		resource.obterImagem(idimg,retorno =>{
			defer.resolve(retorno);
		}, fail => {
			console.log(fail);
			defer.reject({mensagem: "Falha ao obter lista de produtos"});
		});
		return defer.promise;
	}
}
}());
