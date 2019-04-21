angular.module('app')
.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', { templateUrl: 'index.html' })
	.when('/classes', { templateUrl: 'classes.html' })
	.when('/about', { templateUrl: 'about.html' })
	.when('/faq', { controller: 'ContentCtrl', templateUrl: 'faq.html' })

	.when('/login', { controller: 'LoginCtrl', templateUrl: 'login.html' })
	.when('/register', { controller: 'RegisterCtrl', templateUrl: 'registration.html' })
	
	.when('/user-account', { controller: 'UserCtrl', templateUrl: 'user/user-account.html' })
	.when('/update-user-account', { controller: 'UpdateCtrl', templateUrl: 'user/update-user-account.html' })
	.when('/update-user-password', { controller: 'UpdateCtrl', templateUrl: 'user/update-user-password.html' })

	.when('/add-child', { controller: 'ChildCtrl', templateUrl: 'user/add-child.html' })
	.when('/update-child', { controller: 'UserCtrl', templateUrl: 'user/update-child.html' })

	.when('/user-classes', { templateUrl: 'user/user-classes.html' })
	.when('/user-photos', { templateUrl: 'user/user-photos.html' })
	.when('/user-payments', { templateUrl: 'user/user-payments.html' })
	.when('/user-forms', { templateUrl: 'user/user-forms.html' })
	
	.when('/admin', { controller: 'AdminLoginCtrl', templateUrl: 'admin/admin-login.html' })
	.when('/admin-register', { controller: 'AdminLoginCtrl', templateUrl: 'admin/registration.html' })

	.when('/admin-account', { templateUrl: 'admin/admin-account.html' })
	.when('/update-admin-account', { controller: 'UpdateAdminCtrl', templateUrl: 'admin/update-admin-account.html'})
	.when('/update-admin-password', { controller: 'UpdateAdminCtrl', templateUrl: 'admin/update-admin-password.html'})
	.when('/update-admin-bio', { controller: 'UpdateAdminCtrl', templateUrl: 'admin/update-admin-bio.html'})

	.when('/admin-classes', {templateUrl: 'admin/admin-classes.html'})
	.when('/admin-clients', {templateUrl: 'admin/admin-clients.html'})
	.when('/admin-photos', {templateUrl: 'admin/admin-photos.html'})
	.when('/admin-payments', {templateUrl: 'admin/admin-payments.html'})
	.when('/admin-forms', {templateUrl: 'admin/admin-forms.html'})

	.when('/cm', { controller: 'ContentCtrl', templateUrl: 'cm/cm.html'})
	.when('/cm-element-add', { controller: 'ContentCtrl', templateUrl: 'cm/cm-element-add.html'})
	.when('/cm-element-edit', { controller: 'ContentCtrl', templateUrl: 'cm/cm-element-edit.html'})

	.when('/cm-faq', { controller: 'ContentCtrl', templateUrl: 'cm/cm-faq.html'})
	.when('/cm-faq-add', { controller: 'ContentCtrl', templateUrl: 'cm/cm-faq-add.html'})
	.when('/cm-faq-edit', { controller: 'ContentCtrl', templateUrl: 'cm/cm-faq-edit.html'})

	$locationProvider.html5Mode(true);
})