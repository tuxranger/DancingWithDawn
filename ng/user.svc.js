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

	svc.checkToken = function() {
		$http.defaults.headers.common['X-Auth'] = window.sessionStorage.token
		return svc.getUser()
	}

	svc.login = function (email, password) {
		return $http.post('/api/sessions', {
			email: email, password: password
		})
		.then(function (val) {
			window.sessionStorage.token = val.data
			$http.defaults.headers.common['X-Auth'] = val.data
			return svc.getUser()
		}, function(err) {
			return err
		})
	}

	svc.logout = function() {
		delete $http.defaults.headers.common['X-Auth']
		sessionStorage.clear();
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

	svc.updatePassword = function (id, newPassword) {
		return $http.put('/api/users/updatePassword', {
			id: id,
			password: newPassword
		})
	}

	svc.resetPassword =  function (email, newPassword) {
		return $http.put('/api/users/resetPassword', {
			email: email,
			newPassword: newPassword
		})
	}

	svc.updateChild = function (child) {
		return $http.put('/api/users/updateChild', child)
	}

	svc.deleteChild = function (child) {
		return $http.put('/api/users/deleteChild', child)
	}

	svc.addChild = function (adultId, firstName, lastName, dob, notes) {
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

	svc.email = function (email, newPassword) {
		return $http.post('/api/users/sendEmail',{
			email: email,
			newPassword: newPassword
		})
	}


})
