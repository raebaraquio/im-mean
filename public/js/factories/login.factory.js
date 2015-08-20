tm.service('LoginFactory',function($http){
	var LoginFactory = null;
	LoginFactory = {
		login : function(loginData) {
			var p = $http({
				url:'/users/'+loginData.username,
				method: 'GET'
			});
			return p;
		}
	};
	return LoginFactory;
});