angular.module('userService', [])

.factory('User', function($http) {

	// create a new object
	var userFactory = {};

	// get a single user
	userFactory.get = function(id) {
		return $http.get('http://localhost:8080/api/users/' + id);
	};

	// get all users
	userFactory.all = function() {
		return $http.get('http://localhost:8080/api/users/');
	};

	// create a user
	userFactory.create = function(userData) {
		return $http.post('http://localhost:8080/api/create/', userData);
	};

	// update a user
	userFactory.update = function(id, userData) {
		return $http.put('http://localhost:8080/api/users/' + id, userData);
	};

	// delete a user
	userFactory.delete = function(id) {
		return $http.delete('http://localhost:8080/api/users/' + id);
	};

	// return our entire userFactory object
	return userFactory;

});
