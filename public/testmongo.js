var tm = angular.module('testmongo', ['ngRoute'])

tm.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider
		.when('/',
		{
			templateUrl:'views/login/index.html',
			controller:'LoginController'
		})
		.when('/new',
		{
			templateUrl:'views/new/index.html',
			controller:'NewUserController'
		})
		.otherwise({
			redirectTo:'/'
		})
}]);
