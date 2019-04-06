angular.module('app')
.service('AdminSvc', function ($http) {
	var svc = this

	svc.getAdmin = function () {
		return $http.get('/api/admin')
	}

	svc.register = function (email, username, password, firstName, lastName, phone) {
		return $http.post('/api/admin', {
			username: username,
			password: password,
			email: email,
			firstName: firstName,
			lastName: lastName,
			phone: phone
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

	svc.update = function (id, username, firstName, lastName, email, phone) {
		return $http.put('/api/admin/update', {
			id: id,
			username: username,
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone
		})
	}

	svc.updatePassword = function (id, newPassword) {
		return $http.put('/api/admin/updatePassword', {
			id: id,
			password: newPassword
		})
	}

	svc.updateBio = function (id, bio) {
		return $http.put('/api/admin/updateBio', {
			id: id,
			bio: bio
		})
	}

	svc.getAllUsers = function () {
		return $http.get('/api/admin/getAllUsers')
	}

	svc.getAllChildren = function () {
		return $http.get('/api/admin/getAllChildren')
	}

})