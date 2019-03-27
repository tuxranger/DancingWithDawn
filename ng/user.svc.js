angular.module('app')
.service('UserSvc', function ($http) {
	var svc = this
	svc.getUser = function () {
		return $http.get('/api/users')
	}

	svc.register = function (email, password, firstName, lastName, streetAddress, city, state, zip, phone) {
		return $http.post('/api/users', {
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
			streetAddress: streetAddress,
			city: city,
			state: state,
			zip: zip,
			phone: phone
		}).then(function () {
			return svc.login(email, password)
		})
	}

	svc.login = function (email, password) {
		return $http.post('/api/sessions', {
			email: email, password: password
		}).then(function (val) {
			svc.token = val.data
			$http.defaults.headers.common['X-Auth'] = val.data
			return svc.getUser()
		})
	}

	svc.logout = function() {
		delete $http.defaults.headers.common['X-Auth']
	}
})