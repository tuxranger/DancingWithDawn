angular.module('app')
	.config(function ($routeProvider, $locationProvider) {
			$routeProvider
			.when('/', { controller: 'ContentCtrl', templateUrl: 'index.html' })
			.when('/classes', { controller: 'ContentCtrl', templateUrl: 'classes.html' })
			.when('/about', { controller: 'ContentCtrl', templateUrl: 'about.html' })
			.when('/faq', { controller: 'ContentCtrl', templateUrl: 'faq.html' })

			.when('/login', { controller: 'LoginCtrl', templateUrl: 'login.html' })
			.when('/register', { controller: 'RegisterCtrl', templateUrl: 'registration.html' })
			.when('/reset-password', { controller: 'ResetCtrl', templateUrl: 'reset-password.html'})
			
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

			.when('/admin-classes', { controller: 'ClassCtrl', templateUrl: 'admin/admin-classes.html'})
			.when('/admin-add-class', { controller: 'ClassCtrl', templateUrl: 'admin/admin-add-class.html'})
			.when('/admin-update-class', { controller: 'ClassCtrl', templateUrl: 'admin/admin-update-class.html' })

			.when('/admin-clients', {controller: 'ClientsCtrl', templateUrl: 'admin/admin-clients.html'})
			.when('/admin-photos', {templateUrl: 'admin/admin-photos.html'})
			.when('/admin-payments', {templateUrl: 'admin/admin-payments.html'})
			.when('/admin-forms', {templateUrl: 'admin/admin-forms.html'})

			.when('/cm', { controller: 'AdminContentCtrl', templateUrl: 'cm/cm.html'})
			.when('/cm-element-add', { controller: 'AdminContentCtrl', templateUrl: 'cm/cm-element-add.html'})
			.when('/cm-element-edit', { controller: 'AdminContentCtrl', templateUrl: 'cm/cm-element-edit.html'})

			.when('/cm-homepage', { controller: 'AdminContentCtrl', templateUrl: 'cm/cm-homepage.html'})
			.when('/cm-classes', { controller: 'AdminContentCtrl', templateUrl: 'cm/cm-classes.html'})
			.when('/cm-about', { controller: 'AdminContentCtrl', templateUrl: 'cm/cm-about.html'})

			.when('/cm-faq', { controller: 'AdminContentCtrl', templateUrl: 'cm/cm-faq.html'})
			.when('/cm-faq-add', { controller: 'AdminContentCtrl', templateUrl: 'cm/cm-faq-add.html'})
			.when('/cm-faq-edit', { controller: 'AdminContentCtrl', templateUrl: 'cm/cm-faq-edit.html'})

	$locationProvider.html5Mode(true);
})
