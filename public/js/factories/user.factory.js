tm.factory('UserFactory',['$http',
	function($http){
	var UserFactory=null;
	
	UserFactory = {
		add : function(user) {
			var p = $http({
				url:'/users/new',
				method: 'POST',
				data:user
			});
			return p;
		}
	}
	return UserFactory;
}]);