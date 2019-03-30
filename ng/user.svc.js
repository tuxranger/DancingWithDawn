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

	svc.update = function (id, email, firstName, lastName, streetAddress, city, state, zip, phone) {
		return $http.put('/api/users/update', {
			id: id,
			email: email,
			firstName: firstName,
			lastName: lastName,
			streetAddress: streetAddress,
			city: city,
			state: state,
			zip: zip,
			phone: phone
		})
	}

	svc.updateChild = function (child) {
		return $http.put('/api/users/updateChild', child)
	}

	svc.addChild = function (adultId, firstName, lastName, dob, notes) {
		console.log(adultId)

		return $http.post('/api/users/addChild', {
			adultId: adultId,
			firstName: firstName,
			lastName: lastName,
			dob: dob,
			notes: notes
		})
	}

	svc.getAllChildren = function () {
		return $http.get('/api/users/getAllChildren')
	}

})