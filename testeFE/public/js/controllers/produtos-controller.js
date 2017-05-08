(function () {
    "use strict";
angular.module('testewmfc').controller('ProdutosController', function(TesteBEService) {
		let vmProdutosController = this;

		function init(){
			TesteBEService.listarProdutos().then(retorno =>{
				vmProdutosController.produtos = retorno;
			}).catch(erro => {
				vmProdutosController.mensagem = erro;
			}); 
		}
		init();
});
}());
