angular.module('app')
.service('AdminSvc', function ($http) {
	var svc = this

	svc.getAdmin = function () {
		return $http.get('/api/admin')
	}

	svc.register = function (username, password) {
		return $http.post('/api/admin', {
			username: username,
			password: password
		}).then(function () {
			return svc.login(username, password)
		})
	}

	svc.login = function (username, password) {
		return $http.post('/api/admin-sessions', {
			username: username, password: password
		})
		.then(function (val) {
			svc.token = val.data
			$http.defaults.headers.common['X-Auth'] = val.data
			return svc.getAdmin()
		}, function(err) {
			return err
		})
	}

	svc.logout = function() {
		delete $http.defaults.headers.common['X-Auth']
	}

})