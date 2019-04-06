angular.module('app')
.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', { templateUrl: 'index.html' })
	.when('/classes', { templateUrl: 'classes.html' })
	.when('/about', { templateUrl: 'about.html' })
	.when('/faq', { templateUrl: 'faq.html' })

	.when('/login', { controller: 'LoginCtrl', templateUrl: 'login-form.html' })
	.when('/register', { controller: 'RegisterCtrl', templateUrl: 'registration-form.html' })
	
	.when('/user-account', { controller: 'UserCtrl', templateUrl: 'user-account.html' })
	.when('/update-user-account', { controller: 'UpdateCtrl', templateUrl: 'update-user-account.html' })
	.when('/update-user-password', { controller: 'UpdateCtrl', templateUrl: 'update-user-password.html' })

	.when('/add-child', { controller: 'ChildCtrl', templateUrl: 'add-child.html' })
	.when('/update-child', { controller: 'UserCtrl', templateUrl: 'update-child.html' })

	.when('/user-classes', { templateUrl: 'user-classes.html' })
	.when('/user-photos', { templateUrl: 'user-photos.html' })
	.when('/user-payments', { templateUrl: 'user-payments.html' })
	.when('/user-forms', { templateUrl: 'user-forms.html' })
	
	.when('/admin', { controller: 'AdminLoginCtrl', templateUrl: 'admin/admin-login.html' })
	.when('/admin-register', { controller: 'AdminLoginCtrl', templateUrl: 'admin/registration.html' })

	.when('/admin-account', { templateUrl: 'admin/admin-account.html' })
	.when('/update-admin-account', { controller: 'UpdateAdminCtrl', templateUrl: 'admin/update-admin-account.html'})
	.when('/update-admin-password', { controller: 'UpdateAdminCtrl', templateUrl: 'admin/update-admin-password.html'})
	.when('/update-admin-bio', { controller: 'UpdateAdminCtrl', templateUrl: 'admin/update-admin-bio.html'})

	.when('/admin-classes', { templateUrl: 'admin/admin-classes.html'})
	.when('/admin-clients', { controller: 'ClientsCtrl', templateUrl: 'admin/admin-clients.html'})
	.when('/admin-photos', { templateUrl: 'admin/admin-photos.html'})
	.when('/admin-payments', { templateUrl: 'admin/admin-payments.html'})
	.when('/admin-forms', { templateUrl: 'admin/admin-forms.html'})

	$locationProvider.html5Mode(true);
})