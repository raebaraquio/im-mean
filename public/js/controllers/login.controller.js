tm.controller('LoginController',['$scope','LoginFactory',
	function($scope,LoginFactory){

	$scope.user = {};

	$scope.login = function(){
		console.log($scope.user)
		console.log(' ----- ey ------ ')
		var p = LoginFactory.login($scope.user);
		p.then(function(data){
			console.log(data)
		})
	}

}]);