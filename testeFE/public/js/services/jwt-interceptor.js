angular.module('testewmfc').factory('jwtInterceptor', jwtInterceptor);

	function jwtInterceptor($window, $q, $location){
		let jwtInterceptor = {};

		jwtInterceptor.response = function(response){
			let token = response.headers('x-access-token');
			if(token){
				$window.sessionStorage.token = token;
			}
			return response;
		}
		jwtInterceptor.request =  function(req){
			req.headers = req.headers || {};
			if($window.sessionStorage.token){
				req.headers['x-access-token'] = $window.sessionStorage.token;
			}
			return req;
		}

		jwtInterceptor.responseError =  function(reject){
			if(reject != null && reject.status === 401){
				delete $window.sessionStorage.token;
				$location.path('/login');
			}
			return $q.reject(reject);
		}
		return jwtInterceptor;
	}
