tm.controller('NewUserController',['$scope','UserFactory',
	function($scope,UserFactory){

	$scope.user = {}

	$scope.add = function(){
		console.log($scope.user)
		var p = UserFactory.add($scope.user)
		p.then(function(data){
			console.log(data)
		}, function(e){
			console.log(e)
		})
	}

}]);