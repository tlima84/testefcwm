(function () {
    "use strict";

angular.module('testewmfc', ['ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {
		
		$httpProvider.interceptors.push('jwtInterceptor');

		$routeProvider.when('/produtos', {
			templateUrl: 'partials/produtos.html',
			controller: 'ProdutosController',
			controllerAs : 'vmProdutosController',
		}),
		$routeProvider.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'AuthController',
			controllerAs : 'vmAuthCtrl'
		})
		$routeProvider.otherwise({redirectTo: '/produtos'});

});
}());
