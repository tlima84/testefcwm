angular.module('testewmfc').controller('ProdutosController', function(TesteBEService) {
		let vmProdutosController = this;

		function init(){
			/*
			let resource = $resource('http://localhost:3021/produtos', {});
			resource.get().$promise.then(function(retorno) {
			  vmProdutosController.produtos = retorno;
			}).catch(erro => {
				vmProdutosController.mensagem = erro;
			}); 
			*/
			TesteBEService.listarProdutos().then(retorno =>{
				vmProdutosController.produtos = retorno;
			}).catch(erro => {
				vmProdutosController.mensagem = erro;
			}); 
		}
		init();
});